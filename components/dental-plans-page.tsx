"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { dentalOffers, dentalPlanFaqs, dentalPlanFeatures, dentalPlans, type DentalPlanBenefit } from "@/content/dental-plans";

type IconProps = { name: string; className?: string };

const iconPaths: Record<string, { viewBox: string; paths: string[]; outline?: boolean }> = {
  basic: { viewBox: "0 0 512 512", paths: ["M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM144 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"] },
  standard: { viewBox: "0 0 512 512", paths: ["M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z"] },
  premium: { viewBox: "0 0 576 512", paths: ["M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"] },
  doctor: { viewBox: "0 0 448 512", paths: ["M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1l0 50.8c27.6 7.1 48 32.2 48 62l0 40c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-40c0-29.8 20.4-54.9 48-62l0-57.1c-6-.6-12.1-.9-18.3-.9l-91.4 0c-6.2 0-12.3 .3-18.3 .9l0 65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-59.1zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"] },
  tooth: { viewBox: "0 0 448 512", paths: ["M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5l0 6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5l0-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z"] },
  star: { viewBox: "0 0 576 512", paths: ["M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"] },
  ticket: { viewBox: "0 0 576 512", paths: ["M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16z"] },
  family: { viewBox: "0 0 640 512", paths: ["M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7zM224 224a96 96 0 1 1 192 0 96 96 0 1 1-192 0zm-96 261.3C128 411.7 187.7 352 261.3 352h117.3C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"] },
  percent: { viewBox: "0 0 384 512", paths: ["M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0-128 0 64 64 0 1 0 128 0z"] },
  implants: { viewBox: "0 0 576 512", paths: ["M0 128C0 75 43 32 96 32h384c53 0 96 43 96 96v256c0 53-43 96-96 96H96c-53 0-96-43-96-96V128zm176 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-56c0-26.5-21.5-48-48-48s-48 21.5-48 48zm176-48c-26.5 0-48 21.5-48 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-56c0-26.5-21.5-48-48-48zM48 208v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zM96 384c26.5 0 48-21.5 48-48v-24c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48zm80-48c0 26.5 21.5 48 48 48s48-21.5 48-48v-24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v24zm176 48c26.5 0 48-21.5 48-48v-24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48zm80-176v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zm48 176c26.5 0 48-21.5 48-48v-24c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48z"] },
  child: { viewBox: "0 0 320 512", paths: ["M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6l39.9 63.4c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-32z"] },
  braces: { viewBox: "0 0 24 24", paths: ["M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z"] },
  aligner: { viewBox: "0 0 24 24", paths: ["M12 5.5C10.926 4.914 9.417 4 8 4c-2.1 0-4 1.247-4 5 0 4.899 1.056 8.41 2.671 10.537.573.756 1.97.521 2.567-.236.398-.505.819-1.439 1.262-2.801.292-.771.892-1.504 1.5-1.5.602 0 1.21.737 1.5 1.5.443 1.362.864 2.295 1.262 2.8.597.759 2 .993 2.567.237C18.944 17.41 20 13.9 20 9c0-3.74-1.908-5-4-5-1.423 0-2.92.911-4 1.5z", "M12 5.5 15 7"], outline: true },
  smile: { viewBox: "0 0 496 512", paths: ["M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"] },
  crown: { viewBox: "0 0 512 512", paths: ["M402.75 23l-89.344 68.938-63.062-67.188-63.094 67.188L105.5 28.25l32.688 126.156h230.125L402.75 23zM250.156 83.375 274.906 106l-24.75 32.53-24.75-32.53 24.75-22.625zm87.938 89.78c-30.447 0-57.398 15.37-73.5 38.75-3.405 4.224-6.59 8.79-9.47 13.75-47.705-89.566-166.746-56.19-169.718 38.47-3.167 100.887 128.862 126.438 169.72 227.156 30.69-79.906 117.94-116.335 154.186-175.342 11.27-14.935 17.97-33.502 17.97-53.594 0-49.26-39.93-89.19-89.188-89.19z"] },
  laser: { viewBox: "0 0 24 24", paths: ["M12 5.5C10.926 4.914 9.417 4 8 4c-2.1 0-4 1.247-4 5 0 4.899 1.056 8.41 2.671 10.537.573.756 1.97.521 2.567-.236.398-.505.819-1.439 1.262-2.801.292-.771.892-1.504 1.5-1.5.602 0 1.21.737 1.5 1.5.443 1.362.864 2.295 1.262 2.8.597.759 2 .993 2.567.237C18.944 17.41 20 13.9 20 9c0-3.74-1.908-5-4-5-1.423 0-2.92.911-4 1.5z", "M12 5.5 13 8l-2 2 2 2"], outline: true },
  rct: { viewBox: "0 0 512 512", paths: ["M246.752 23.084c-11.678-.205-23.032 4.26-30.952 15.185-29.264 40.35-39.476 78.655-44.385 111.545-4.514 30.235-13.507 59.72-30.952 87.02-31.793 49.747-65.857 124.744-73.587 167.612-5.864 32.387 17.908 42.053 32.705 7.008 20.245-47.94 65.492-125.768 122.06-103.955 51.25 19.76 8.924 122.165-22.193 152.43-25.11 24.424-7.202 51.466 23.944 22.192 33.048-31.062 78.602-92.256 94.612-147.172 6.233-21.378 15.79-43.776 34.458-54.315 39.813-22.477 81.826-58.99 98.115-133.156 10.9-49.632-50.517-70.425-85.266-37.378-5.303-50.398-46.487-62.34-76.51-35.624 10.073-27.63-16.357-50.942-42.048-51.394z"] },
  shield: { viewBox: "0 0 24 24", paths: ["M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"] },
  medicalShield: { viewBox: "0 0 24 24", paths: ["M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"] },
  heartShield: { viewBox: "0 0 512 512", paths: ["M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM144 221.3c0-33.8 27.4-61.3 61.3-61.3 16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9 33.8 0 61.3 27.4 61.3 61.3 0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z"] },
  microscope: { viewBox: "0 0 24 24", paths: ["M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3a3 3 0 0 1 1.47-2.57c.41.59 1.06 1 1.83 1.06.7.06 1.36-.19 1.85-.62l.59 1.61.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.52-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.55c-1.17-.04-2.19.75-2.48 1.86A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H7zm5.86-14.48 1.71 4.7-.94.34-1.71-4.7.94-.34zM10.5 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"] },
  pills: { viewBox: "0 0 512 512", paths: ["M217.4 27.43c-27.9.47-53.1 17.11-64.5 42.84l136.5 41.23c6-35.79-15.5-70.49-50.1-81.02-6.2-1.88-12.7-2.91-19.2-3.05h-2.7zm-69.7 60.08c-6.1 35.89 15.4 70.69 50.1 81.19 34.8 10.5 71.9-6.7 86.5-40zm265.5 44.29c-25.3.1-52.2 12.3-72.5 41L215.9 349.7c-33.5 47.4-18.9 97 14.1 120.4 33.1 23.5 84.6 20.8 118.1-26.6l124.7-176.8c33.5-47.5 18.9-97-14.1-120.5-12.4-8.8-27.3-13.9-43-14.4zm-321.95 93.5c-9.62.1-19.11 2.1-27.93 6-33.11 14.5-50.34 51.5-40.24 86.3l130.72-57.1c-13.1-22.1-36.9-35.5-62.55-35.2z"] },
};

function Icon({ name, className = "h-4 w-4" }: IconProps) {
  const icon = iconPaths[name] ?? iconPaths.tooth;
  return <svg aria-hidden="true" className={className} viewBox={icon.viewBox} fill={icon.outline ? "none" : "currentColor"} stroke={icon.outline ? "currentColor" : "none"} strokeWidth={icon.outline ? 2 : 0} strokeLinecap="round" strokeLinejoin="round">{icon.paths.map((path) => <path key={path} d={path}/>)}</svg>;
}

function WhatsAppIcon() {
  return <svg aria-hidden="true" viewBox="0 0 448 512" className="h-[18px] w-[18px]" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>;
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
      <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">{eyebrow}</p>
    </div>
    <h2 className="dental-plans-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">{title}</h2>
    {subtitle ? <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555] md:text-lg">{subtitle}</p> : null}
  </div>;
}

function BenefitIcon({ benefit, green }: { benefit: DentalPlanBenefit; green: boolean }) {
  return <span className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${green ? "bg-[#E8F5EE] text-[#16412d]" : "bg-[#FDF3D8] text-[#C79A2B]"}`}><Icon name={benefit.icon} className="h-3.5 w-3.5"/></span>;
}

function MembershipPlans() {
  return <div className="mx-10 my-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-[4.5rem] xl:grid-cols-3">
    {dentalPlans.map((plan) => {
      const message = `Hello, I would like to enroll in the \"Dental Membership ${plan.price}\" membership plan priced at ₹${plan.price}. Kindly share the benefits, validity period, and enrollment details.`;
      return <article key={plan.name} className="relative flex flex-col rounded-3xl border border-[#EFE8DD] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
        {plan.featured ? <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#16412d] px-4 py-1 text-xs font-medium text-white shadow-sm">Most Popular</span> : null}
        <div className="flex items-center gap-4">
          <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${plan.featured ? "bg-[#EAF6F0] text-[#16412d]" : "bg-[#FFF3DA] text-[#B8871A]"}`}><Icon name={plan.icon} className="h-6 w-6"/></span>
          <div>
            <p className="text-xs font-medium tracking-[3px] text-[#B79B63]">{plan.name}</p>
            <h3 className="mt-3 text-3xl font-semibold text-[#21282C]">₹{plan.price}</h3>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm"><span className="text-gray-400 line-through">₹{plan.originalPrice}</span><span className="font-semibold text-emerald-600">Save ₹{plan.savings}</span></div>
        <p className="mt-4 min-h-12 text-sm leading-relaxed text-[#666]">{plan.description}</p>
        <div className="my-6 h-px bg-[#ECE7DF]"/>
        <ul className="flex-1 space-y-4">
          {plan.benefits.map((benefit) => <li key={benefit.title} className="flex items-start gap-3">
            <BenefitIcon benefit={benefit} green={Boolean(plan.featured)}/>
            <div><p className="text-sm font-medium text-[#21282C]">{benefit.title}</p><p className="text-xs text-gray-500">{benefit.detail}</p></div>
          </li>)}
        </ul>
        <div className="mt-8 pt-6">
          <a href={`${siteConfig.whatsappHref}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className={`flex h-12 w-full items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[.98] ${plan.featured ? "bg-[#16412d] text-white hover:bg-[#093528]" : "border border-[#D9D0C4] bg-white text-[#21282C] hover:border-[#B8871A] hover:bg-[#FFF9EC]"}`}><WhatsAppIcon/>Get Membership</a>
        </div>
      </article>;
    })}
  </div>;
}

function ExclusiveOffers() {
  return <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-24 md:grid-cols-2 lg:grid-cols-4">
    {dentalOffers.map((offer) => <Link key={offer.title} href={offer.href} className="group cursor-pointer rounded-3xl border border-[#E8DED0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F3EA] text-[#CBA553]"><Icon name={offer.icon} className="h-7 w-7"/></div>
      <h3 className="min-h-14 text-center text-xl font-semibold leading-tight text-[#163B2F]">{offer.title}</h3>
      <div className="my-5 border-t border-dashed border-[#D8CEC0]"/>
      <div className="text-center">
        {offer.value.includes("%") ? <><p className="mb-1 text-sm uppercase tracking-[2px] text-gray-500">Up To</p><p className="font-serif text-4xl font-medium text-[#CBA553]">{offer.value}</p></> : <p className="text-4xl font-semibold text-[#163B2F]">{offer.value}</p>}
        {"note" in offer ? <p className="mt-4 text-sm leading-relaxed text-gray-500">{offer.note}</p> : null}
      </div>
    </Link>)}
  </div>;
}

function WhyChooseUs() {
  return <section>
    <SectionHeading eyebrow="WHY CHOOSE REKHA DENTAL" title="Trusted care for every smile." subtitle="Combining clinical excellence, advanced technology, and compassionate care to deliver exceptional dental experiences."/>
    <div className="mx-10 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:my-16 xl:grid-cols-4">
      {dentalPlanFeatures.map((feature, index) => <article key={feature.title} className="group relative overflow-hidden rounded-2xl border border-[#E8DED0] bg-[#FCFAF6] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D9C5A1] hover:shadow-[0_25px_60px_rgba(31,29,24,0.07)]">
        <span className="dental-plans-font-header absolute right-6 top-5 text-4xl leading-none text-[#ECE4D8] transition-colors duration-500 group-hover:text-[#E1D4BF] lg:text-6xl">{String(index + 1).padStart(2, "0")}</span>
        <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E7DDD0] bg-[#F3ECE1] text-[#163828] lg:h-16 lg:w-16"><Icon name={feature.icon} className="h-6 w-6"/></span>
        <div className="relative z-10 mt-4 lg:mt-8"><h3 className="dental-plans-font-header text-xl font-semibold leading-tight text-[#2C2A27] lg:text-2xl">{feature.title}</h3><p className="mt-5 text-sm leading-6 text-[#66625C] md:text-base lg:leading-7">{feature.body}</p></div>
        <span className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#E9D9B9]/0 blur-3xl transition-colors duration-500 group-hover:bg-[#E9D9B9]/35"/>
      </article>)}
    </div>
  </section>;
}

function Faqs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return <section className="mx-auto my-16 flex max-w-7xl flex-col items-center justify-center px-6 lg:px-10">
    <SectionHeading eyebrow="FAQ" title="Quietly answered."/>
    <div className="w-full max-w-3xl">
      {dentalPlanFaqs.map((item, index) => {
        const open = openFaq === index;
        return <div key={item.question} className="border-b border-[#E0D8CC] py-5">
          <button type="button" aria-expanded={open} aria-controls={`dental-plan-answer-${index}`} onClick={() => setOpenFaq(open ? null : index)} className="flex w-full items-center justify-between gap-5 text-left">
            <h4 className="dental-plans-font-header text-base text-[#2C2C2C] md:text-lg">{item.question}</h4>
            <svg aria-hidden="true" viewBox="0 0 512 512" className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="currentColor"><path d="M256 294.1 383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg>
          </button>
          <div id={`dental-plan-answer-${index}`} className={`overflow-hidden transition-all duration-300 ${open ? "mt-3 max-h-40" : "max-h-0"}`}><p className="pr-6 text-sm leading-relaxed text-[#6B6B6B] md:text-base">{item.answer}</p></div>
        </div>;
      })}
    </div>
  </section>;
}

export function DentalPlansPage() {
  const [tab, setTab] = useState<"plans" | "offers">("plans");
  return <div className="dental-plans-page flow-root bg-[#EAE4DB] pt-10 text-[#21282C]">
    <SectionHeading eyebrow="DENTAL HEALTH PLANS AND OFFERS" title="Smart savings. Better oral health." subtitle="Choose a membership plan and explore offers with exclusive benefits, discounts, and priority dental care."/>
    <div className="flex items-center justify-center gap-3" role="tablist" aria-label="Dental plan options">
      <button type="button" role="tab" aria-selected={tab === "plans"} onClick={() => setTab("plans")} className={`relative overflow-hidden border px-4 py-1.5 text-xs uppercase tracking-[1.5px] transition-colors duration-200 hover:cursor-pointer lg:px-6 lg:py-3 lg:text-sm ${tab === "plans" ? "border-[#16412d] bg-[#16412d] text-white" : "border-[#D8CEC0] text-[#2C2C2C] hover:border-[#16412d] hover:text-[#16412d]"}`}>Membership Plans</button>
      <button type="button" role="tab" aria-selected={tab === "offers"} onClick={() => setTab("offers")} className={`relative overflow-hidden border px-4 py-1.5 text-xs uppercase tracking-[1.5px] transition-colors duration-200 hover:cursor-pointer lg:px-6 lg:py-3 lg:text-sm ${tab === "offers" ? "border-[#16412d] bg-[#16412d] text-white" : "border-[#D8CEC0] text-[#2C2C2C] hover:border-[#16412d] hover:text-[#16412d]"}`}>Exclusive Offers</button>
    </div>
    <div className="mt-16" role="tabpanel">{tab === "plans" ? <MembershipPlans/> : <ExclusiveOffers/>}</div>
    <WhyChooseUs/>
    <Faqs/>
  </div>;
}
