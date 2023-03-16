export const AppName = `AppName`;

export const AppConfig = {
  name: `AppName`,
  address: {
    line1: `Krishna Nagar`,
    line2: ``,
    city: `Lucknow`,
    zip: `226008`,
  },
  contact: `0522 123456`,
  email: `info@domain.com`,
  social: {
    facebook: ``,
    twitter: ``,
    youtube: ``,
    instagram: ``,
  },
};

export function getFullAddressFromConfig() {
  const { line1, line2, city, zip } = AppConfig.address;
  return `${line1} ${line2}, ${city} ${zip}`;
}
