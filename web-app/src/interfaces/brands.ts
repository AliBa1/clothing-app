export interface Brand {
  id: string;
  name: string;
  /**
   * Alphanumeric, dashes (-), and underscores (_) ONLY
   */
  handle: string;
  logo: string;
  bio: string;
  links: Links;
}

interface Links {
  instagram?: string;
  tiktok?: string;
  youtube?: string;
}

export const emptyBrand: Brand = {
  id: '',
  name: '',
  handle: '',
  logo: '',
  bio: '',
  links: {}
};

export const mockBrands: Brand[] = [
  {
    id: '1',
    name: '1017 ALYX 9SM',
    handle: 'Alyx',
    logo: '/mock/logos/1017_ALYX_logo.jpeg',
    bio: '1017 ALYX 9SM merges subversive culture and modern craftsmanship to create innovative collections that blend technical precision with emotional depth.',
    links: {
      instagram: 'https://www.instagram.com/alyxstudio'
    }
  },
  {
    id: '2',
    name: 'boohooMAN',
    handle: 'boohooMAN',
    logo: '/mock/logos/boohooMAN_logo.jpg',
    // eslint-disable-next-line quotes
    bio: "Born from boohoo.com boohooMAN is fashion's best kept secret in menswear. Following from boohoo.com's success we wanted to bring something new to the menswear market.\n Combining cutting edge design with an affordable price tag, we push boundaries to bring you the latest styles for less of a strain on your wallet.\n Our philosophy is pretty simple; we don't take fashion, or life, too seriously. Whether you want up to the minute trend and lifestyle news, or the best styles before your mates, we've got you covered. We know you want the best and the latest trends, so we work to give you just that. 24/7.",
    links: {
      instagram: 'https://www.instagram.com/boohoomanofficial',
      youtube: 'https://www.youtube.com/boohooMAN',
      tiktok: 'https://www.tiktok.com/@boohooman'
    }
  },
  {
    id: '3',
    name: 'Nike',
    handle: 'Nike',
    logo: '/mock/logos/nike_logo.jpg',
    bio: 'NIKE, Inc. is a team comprised of the Nike, Jordan and Converse brands driven by a shared purpose to leave an enduring impact.',
    links: {}
  },
  {
    id: '4',
    name: 'RICH USI',
    handle: 'RICH_USI',
    logo: '/mock/logos/richusi_logo.png',
    bio: '',
    links: {
      instagram: 'https://www.instagram.com/richxusi'
    }
  },
  {
    id: '5',
    name: 'Statment',
    handle: 'Statment',
    logo: '/mock/logos/statement_logo.png',
    bio: '',
    links: {
      instagram: 'https://instagram.com/statementbrandd'
    }
  },
  {
    id: '6',
    name: 'Thirteen Studios',
    handle: 'Thirteen_Studios',
    logo: '/mock/logos/thirteen_studios_logo.png',
    // eslint-disable-next-line quotes
    bio: "Handcrafted in Los Angeles from start to finish- all our garments use the highest quality 100% combed cotton pre-shrunk fabrics milled locally. We go the extra mile to ensure our customers won't have to worry about their products shrinking or losing quality in the washing and drying processes. Our mission is simple. Create ethically made real luxury blanks that last a lifetime sold at a fair price.",
    links: {
      instagram: 'https://www.instagram.com/nike',
      youtube: 'https://www.youtube.com/user/NIKE'
    }
  }
];
