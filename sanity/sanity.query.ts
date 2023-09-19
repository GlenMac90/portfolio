import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}

export async function getCaseStudy() {
  return client.fetch(
    groq`*[_type == "caseStudy"]{
      _id,
      caseStudyLink,
      title,
      description,
      myRole,
      startDate,
      endDate,
      "techStackCaseStudy": techStackCaseStudy[]{
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
      mobileImage {alt, "image": asset->url},
      backgroundColour,
      reverseLayout
    }`
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
    }`
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
    }`
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
    }`
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
    }`
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
    }`
  );
}

export async function getSocialMediaIcons() {
  return client.fetch(
    groq`*[_type == "socialMediaIcon"]{
      icon {alt, "image": asset->url},
      iconDark {alt, "image": asset->url},
      title,
      url
    }`
  );
}

export async function getWorkProcessSymbols() {
  return client.fetch(
    groq`*[_type == "workProcessSymbol"]{
      title,
      image {"image": asset->url}
    }`
  );
}