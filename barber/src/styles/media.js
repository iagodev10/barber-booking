export const media = {
  tablet: (styles) => `
    @media (min-width: 768px) {
      ${styles}
    }
  `,

  notebook: (styles) => `
    @media (min-width: 1024px) {
      ${styles}
    }
  `,

  desktop: (styles) => `
    @media (min-width: 1280px) {
      ${styles}
    }
  `,
};
