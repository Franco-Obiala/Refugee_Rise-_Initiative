
import React from 'react';
import { NavItem, Project, Step } from './types';
import { HandshakeIcon, BuildingStorefrontIcon, UserCircleIcon, SparklesIcon, CurrencyDollarIcon, PresentationChartLineIcon } from './components/IconComponents'; // Assuming IconComponents.tsx exists

export const NAVIGATION_ITEMS: NavItem[] = [
  { name: 'Our Mission', href: '#about' },
  { name: 'Impact Stories', href: '#projects' },
  { name: 'Get Involved', href: '#donate' },
  { name: 'Contact', href: '#contact' },
];

export const CONTACT_INFO = {
  email: 'francoohisa9535@gmail.com',
  phone: '+254798957667',
  linkedin: 'Refugee Rise Initiative',
  linkedinUrl: 'https://www.linkedin.com/company/refugee-rise-initiative', // Assuming a standard URL pattern if not provided
};

export const STEPS_DATA: Step[] = [
  {
    id: 1,
    icon: <HandshakeIcon className="w-12 h-12 text-emerald-400" />,
    title: 'Identify & Partner',
    description: 'We identify needs and partner with refugee communities and landowners.',
  },
  {
    id: 2,
    icon: <BuildingStorefrontIcon className="w-12 h-12 text-blue-400" />,
    title: 'Fund & Build',
    description: 'Secure funding through grants and investments to construct vital shops.',
  },
  {
    id: 3,
    icon: <UserCircleIcon className="w-12 h-12 text-cyan-400" />,
    title: 'Empower Entrepreneurs',
    description: 'Enable refugees to own and operate businesses, fostering independence.',
  },
  {
    id: 4,
    icon: <SparklesIcon className="w-12 h-12 text-yellow-400" />,
    title: 'Achieve Sustainability',
    description: 'Reinvest profits to build more, creating a self-sustaining cycle of growth.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'inkomoko-grant',
    title: 'Inkomoko FAST Grant Recipient',
    description: 'Refugee Rise Initiative was awarded a significant grant to kickstart operations and support our vision.',
    details: [
      'Awarded by Inkomoko in partnership with the Mastercard Foundation.',
      'Part of the Fund for Alumni Startups in Transition (FAST) program.',
      'This grant is crucial for funding initial shop constructions and operational costs.'
    ],
    grantAmount: '$4,000 USD (net after 15% WHT from $4,705.88 gross)',
    status: 'Awarded April 2025',
    imageUrl: '/images/projects/inkomoko-grant.jpg',
    logo: (
      <div className="flex items-center space-x-2">
        <div className="bg-gray-700 p-1 rounded text-xs">INKOMOKO</div>
        <div className="bg-red-600 p-1 rounded text-xs">Mastercard Foundation</div>
      </div>
    )
  },
  {
    id: 'michael-oliwa',
    title: 'Empowering Michael Oliwa',
    beneficiary: 'Michael Oliwa',
    description: 'Provided a business startup loan to Michael Oliwa, fostering entrepreneurship within the refugee community.',
    details: [
      'Helped Michael establish his own business venture.',
      'Focuses on sustainable income generation for Michael and his family.',
      'Showcases our model of direct financial empowerment.'
    ],
    investment: 'Ksh 100,000',
    expectedReturn: 'Ksh 140,000',
    duration: '1 Year',
    status: 'Ongoing',
    imageUrl: '/images/projects/michael.jpg',
  },
  {
    id: 'hellen-loki',
    title: 'A Shop for Hellen Loki',
    beneficiary: 'Hellen Loki (Single Mother, Kalobeyei Village Two)',
    description: 'Constructed and stocked a shop for Hellen Loki, providing a pathway to financial independence.',
    details: [
      'Successfully operating for over 8 months.',
      'The shop provides Hellen with a stable income source for her family.',
      'Refugee Rise manages the shop until the initial investment + profit is recovered.',
      'Ownership will be fully transferred to Hellen upon project completion.',
      'This project addresses housing and business infrastructure challenges.'
    ],
    investment: 'Ksh 300,000 (Construction & Stock)',
    expectedReturn: 'Ksh 420,000 (140% of cost)',
    duration: '2 Years',
    status: 'Operation Phase (8 Months)',
    imageUrl: '/images/projects/hellen-1.jpg',
    images: [
      '/images/projects/hellen-1.jpg',
      '/images/projects/hellen-2.jpg'
    ],
  },
];

export const ABOUT_TEXT = {
  title: "Refugee Rise: Building Shops, Building Futures",
  expandedIdea: "The Refugee Rise: Building Shops, Building Futures initiative focuses on creating financial stability for refugees by constructing strategically located shops. The core of the business is to use personal funds to construct shops, rent them out, and generate income for both the builder and the shop owner, while providing a long-term source of financial independence for the refugee community. The initiative goes beyond just constructing shops — it empowers refugees to own and operate viable businesses, fostering entrepreneurship within the camp and creating opportunities for others to thrive.",
  keyComponents: [
    {
      title: "1. Construction of Rental Shops",
      icon: <BuildingStorefrontIcon className="w-8 h-8 text-emerald-400 mr-3" />,
      content: "Using our own capital, you will construct shops in partnership with land/plot owners who are part of the refugee community. Every step of the construction process will be transparent, with detailed invoices provided to the landowner, ensuring trust and accountability."
    },
    {
      title: "2. Profit Model",
      icon: <CurrencyDollarIcon className="w-8 h-8 text-blue-400 mr-3" />,
      content: "Upon completion, the total cost of construction will be multiplied by 140% (100% covering construction costs and 40% profit). For example, if the construction costs Ksh 50,000, the rental revenue will total Ksh 70,000, ensuring a profit of Ksh 20,000. After the whole Ksh 70,000 has been collected, you will receive your rent. After that, the shop will be turned over to the landowner, who may keep renting it out or use it for their own purposes."
    },
    {
      title: "3. Sustainability & Scalability",
      icon: <SparklesIcon className="w-8 h-8 text-cyan-400 mr-3" />,
      content: "A self-sustaining cycle will be established by reinvesting the profits from each store into the construction of further stores. As the company develops, it may be able to build other commercial spaces that are specifically designed to meet the requirements of refugees, such as workshops and kiosks."
    },
    {
      title: "4. Empowering the Community",
      icon: <UserCircleIcon className="w-8 h-8 text-yellow-400 mr-3" />,
      content: "This project will directly support the financial independence of the refugee community by creating local jobs and business opportunities. The landowner can either rent out the shop after your profit is recovered or use it to run their business, ensuring long-term economic benefit for them."
    },
    {
      title: "5. Social Impact",
      icon: <PresentationChartLineIcon className="w-8 h-8 text-green-400 mr-3" />,
      content: "The initiative focuses on financially empowering Zero refugees (i.e., those without any financial support) by offering them business opportunities and an income source. This model not only addresses the housing and business infrastructure challenges in Kakuma but also promotes financial literacy and entrepreneurship among refugees."
    }
  ]
};
    