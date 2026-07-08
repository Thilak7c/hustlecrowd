// pages/project.jsx

import { useMemo, useState } from 'react';
import { NavbarDark, FooterDark } from '../components'
import { Hero5, BlogsDark } from '../sections'

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter prompts based on search term
  const filteredPrompts = useMemo(() => {
    if (!searchTerm.trim()) {
      return PROJECTS;
    }

    const searchLower = searchTerm.toLowerCase();
    return PROJECTS.filter(prompt => 
      prompt.title.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  return (
    <>
      {/* V2 */}
      <NavbarDark />
      <Hero5 searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <BlogsDark  items={filteredPrompts}/>
      <FooterDark />
    </>
  )
}

export default Projects

const PROJECTS=[
  {
    "id":13,
    'title':'Best Prompts',
    'desc':"Blog",
    'coverImg':'https://cdn-images-1.medium.com/max/600/1*Umy3yVF71-OfFwg2JxXOEQ.png',
    'url':'/best-prompts',
  },
  {
    "id":12,
    'title':'Epic Tales',
    'desc':"Blog",
    'coverImg':'https://cdn-images-1.medium.com/max/900/1*wdrSXH8v8S-Vv9Y-DRkdIg.png',
    'url':'https://epic-chronicles-hub.lovable.app/',
  },
  {
    "id":11,
    'title':'Instant Blog Api Generator',
    'desc':"Saas",
    'coverImg':'https://cdn-images-1.medium.com/max/2600/1*U6huJX5NmO4CpqhNHMiP7Q.png',
    'url':'https://blog-api-saas.vercel.app',
  },
  {
    "id":10,
    'title':'Seller Dashboard',
    'desc':"ViteJS + Tailwind",
    'coverImg':'https://cdn-images-1.medium.com/max/2600/1*0N1DYovDUEe-ZJ3NSUHlfQ.png',
    'url':'https://seller-haven-portal.lovable.app/',
  },
  {
    "id":9,
    'title':'Ecommerce 3',
    'desc':"NextJS + Tailwind",
    'coverImg':'https://cdn-images-1.medium.com/max/900/1*tfaYrO46KXa4hA51fu0KUA.png',
    'url':'https://saree-shop.netlify.app/',
  },
  {
    "id":8,
    'title':'Notes App',
    'desc':"ViteJS + Tailwind + Supabase",
    'coverImg':'https://cdn-images-1.medium.com/max/900/1*WoQ8QfYNsN_4YgH88Xbv0w.png',
    'url':'https://react-supabase-notes-app.netlify.app/',
  },
  {
    "id":7,
    'title':'Ecommerce 2',
    'desc':"NextJS + MUI",
    'coverImg':'https://cdn-images-1.medium.com/max/960/1*mR5XdR2W3Qgp7-WnzWxXJQ.png',
    'url':'https://mui-ecommerce-dcud-ivory.vercel.app/shop',
  },
  {
      "id":1,
      'title':'Ecommerce 1',
      'desc':"NextJS + Tailwind + Stripe",
      'coverImg':'https://cdn-images-1.medium.com/max/960/1*7_qOfb0u2hQjrajRF38Qjw.png',
      'url':'https://shop-mu-mauve.vercel.app/',
  },
  {
      "id":2,
      'title':'Glumos - Job Listing',
      'desc':"ReactJS + Tailwind",
      'coverImg':'https://cdn-images-1.medium.com/max/960/1*bhZNKUz88jfI4yN3KJ8KzA.png',
      'url':'https://glumos.netlify.app/',
  },
  {
      "id":3,
      'title':'Course Landing Page',
      'desc':"ReactJS + Tailwind",
      'coverImg':'https://cdn-images-1.medium.com/max/960/1*GTiOl5F6K0spOVKdZF_5eg.png',
      'url':'https://practice-react-landing-page.netlify.app/',
  },
  {
      "id":4,
      'title':'Blog',
      'desc':"ReactJS + Tailwind",
      'coverImg':'https://cdn-images-1.medium.com/max/960/1*pgEaJFDtheeOMKqUkmlVDQ.png',
      'url':'https://react-tailwind-blog-1.netlify.app/',
  },
  {
      "id":5,
      'title':'Personal Website',
      'desc':"ReactJS + Tailwind",
      'coverImg':'https://cdn-images-1.medium.com/max/960/1*Akt7tEmsZlPh2wq7qBsE3g.png',
      'url':'https://thilaksundaram.netlify.app/',
  },
  {
      "id":6,
      'title':'Youtube Subscriber Counter',
      'desc':"ReactJS + Tailwind",
      'coverImg':'https://cdn-images-1.medium.com/max/960/1*zmROtl1c5CMDrEvvL3MX6Q.png',
      'url':'https://yt-sub-counter.netlify.app/',
  }
]