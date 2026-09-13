// One-off migration: uploads the legacy /public/images/gallery/*.jpeg files to Cloudinary
// so all gallery images live in one place. Run once with: node scripts/migrate-gallery-images.cjs
const fs = require("node:fs");
const path = require("node:path");
const cloudinary = require("cloudinary").v2;

const envPath = path.join(__dirname, "..", ".env.local");
for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
  const eq = line.indexOf("=");
  if (eq === -1) continue;
  const key = line.slice(0, eq).trim();
  const value = line.slice(eq + 1).trim();
  if (key) process.env[key] = value;
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const items = [
  { file: "gallery-01.jpeg", alt: "Rekha Dental reception area", category: "facility" },
  { file: "gallery-02.jpeg", alt: "Aligner", category: "facility" },
  { file: "gallery-03.jpeg", alt: "Rekha Dental Team", category: "facility" },
  { file: "gallery-04.jpeg", alt: "Implant", category: "facility" },
  { file: "gallery-05.jpeg", alt: "Kotgaon Clinic", category: "facility" },
  { file: "gallery-06.jpeg", alt: "Clinical Area", category: "facility" },
  { file: "gallery-07.jpeg", alt: "Consultation Room", category: "facility" },
  { file: "gallery-08.jpeg", alt: "Reception", category: "facility" },
  { file: "gallery-09.jpeg", alt: "Scanner", category: "technology" },
  { file: "gallery-10.jpeg", alt: "Modern dental instruments setup", category: "technology" },
  { file: "gallery-11.jpeg", alt: "10x Sterilization", category: "technology" },
  { file: "gallery-12.jpeg", alt: "Scanner", category: "technology" },
  { file: "gallery-13.jpeg", alt: "Happy Patient", category: "smiles" },
  { file: "gallery-14.jpeg", alt: "Patient smile transformation", category: "smiles" },
  { file: "gallery-15.jpeg", alt: "Confident patient after treatment", category: "smiles" },
  { file: "gallery-16.jpeg", alt: "Clinical Discussion", category: "smiles" },
  { file: "gallery-17.jpeg", alt: "Happy Patient", category: "smiles" },
  { file: "gallery-18.jpeg", alt: "Smiles", category: "smiles" },
  { file: "gallery-19.jpeg", alt: "Happy Patient", category: "smiles" },
  { file: "gallery-20.jpeg", alt: "Little Smile", category: "smiles" },
  { file: "gallery-21.jpeg", alt: "Little Smiles", category: "smiles" },
  { file: "gallery-22.jpeg", alt: "Beautiful smile makeover result", category: "smiles" },
  { file: "gallery-23.jpeg", alt: "Little Smiles", category: "smiles" },
  { file: "gallery-24.jpeg", alt: "Clinic celebration moment", category: "events" },
  { file: "gallery-25.jpeg", alt: "Professional dental seminar", category: "events" },
  { file: "gallery-26.jpeg", alt: "Certification", category: "events" },
  { file: "gallery-27.jpeg", alt: "Participation in event", category: "events" },
  { file: "gallery-28.jpeg", alt: "Certification", category: "events" },
  { file: "gallery-29.jpeg", alt: "Events", category: "events" },
  { file: "gallery-30.jpeg", alt: "Events", category: "events" },
];

async function main() {
  const existing = await cloudinary.api.resources({ type: "upload", prefix: "gallery/", max_results: 500 });
  const alreadyMigrated = new Set(existing.resources.map((r) => path.basename(r.public_id)));

  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    const publicIdBase = path.parse(item.file).name;
    if (alreadyMigrated.has(publicIdBase)) {
      console.log(`skip (already migrated): ${item.file}`);
      continue;
    }
    const filePath = path.join(__dirname, "..", "public", "images", "gallery", item.file);
    const order = index * 10;
    try {
      const uploaded = await cloudinary.uploader.upload(filePath, {
        folder: `gallery/${item.category}`,
        public_id: publicIdBase,
        context: { alt: item.alt, order: String(order) },
      });
      console.log(`uploaded: ${item.file} -> ${uploaded.public_id}`);
    } catch (error) {
      console.error(`FAILED: ${item.file}`, error.message);
    }
  }
}

main().then(() => console.log("done")).catch((error) => {
  console.error(error);
  process.exit(1);
});
