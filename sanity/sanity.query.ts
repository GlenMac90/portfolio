import { groq } from "next-sanity";
import client from "./sanity.client";

const revalidate = 10;

export async function getCaseStudy() {
  return client.fetch(
    groq`*[_type == "caseStudy"]{
      _id,
      caseStudyLink,
      title,
      description,
      myRole,
      sourceCode,
      websiteURL,
      startDate,
      endDate,
      techStackCaseStudy[]{
        title,
        "image": image.asset->url
      },      
      caseStudyDescription,
      problemStatement,
      problemStatementImage {alt, "image": asset->url},
      challenges,
      learnings,
      figmaBannerImage {alt, "image": asset->url},
      techList,
      desktopImage {alt, "image": asset->url},
      desktopMobileImage {alt, "image": asset->url},
      backgroundColour,
      reverseLayout
    }`,
    { next: { revalidate } }
  );
}

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonial"]{
      name,
      jobDescription,
      "image": {
        alt,
        "image": image.asset->url
      },
      rating,
      text
    }`,
    { next: { revalidate } }
  );
}

export async function getWorkExperiences() {
  return client.fetch(
    groq`*[_type == "workExperience"]{
      title,
      position,
      duration,
      durationUnit,
      "image": {
        alt,
        "image": image.asset->url
      },
      "imageDark": {
        alt,
        "image": imageDark.asset->url
      },
      "imagePrimaryLight": {
        alt,
        "image": imagePrimaryLight.asset->url
      },
      "imagePrimaryDark": {
        alt,
        "image": imagePrimaryDark.asset->url
      }
    }`,
    { next: { revalidate } }
  );
}

export async function getServicesProvided() {
  return client.fetch(
    groq`*[_type == "service"]{
      "imageSrc": {
        alt,
        "image": imageSrc.asset->url
      },
      "imageHoverLight": {
        alt,
        "image": imageHoverLight.asset->url
      },
      "imageHoverDark": {
        alt,
        "image": imageHoverDark.asset->url
      },
      title,
      description
    }`,
    { next: { revalidate } }
  );
}

export async function getMySkills() {
  return client.fetch(
    groq`*[_type == "skill"]{
      "src": {
        alt,
        "image": src.asset->url
      },
      text
    }`,
    { next: { revalidate } }
  );
}

export async function getContactDetails() {
  return client.fetch(
    groq`*[_type == "contactDetail"]{
      label,
      "imageSrc": {
        "image": imageSrc.asset->url
      },
      "imageSrcDark": {
        "image": imageSrcDark.asset->url
      },
      info
    }`,
    { next: { revalidate } }
  );
}

export async function getSocialMediaIcons() {
  return client.fetch(
    groq`*[_type == "socialMediaIcon"]{
      icon {alt, "image": asset->url},
      iconDark {alt, "image": asset->url},
      title,
      url
    }`,
    { next: { revalidate } }
  );
}

export async function getWorkProcessSymbols() {
  return client.fetch(
    groq`*[_type == "workProcessSymbol"]{
      title,
      image {"image": asset->url}
    }`,
    { next: { revalidate } }
  );
}
