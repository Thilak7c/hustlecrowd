// pages/tools.jsx

import { useMemo, useState } from 'react';
import { Hero5, ToolsDark } from '../sections'
import { NavbarDark, FooterDark } from '../components'

const Tools = () => {
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
      <Hero5 
        headerTitle="Tools Directory"
        headerSubtitle="Discover our best tools."
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <ToolsDark  items={filteredPrompts}/>
      <FooterDark />
    </>
  )
}

export default Tools

const PROJECTS=[
  {
      "id":1,
      'title':'Image Header Inspector',
      'desc':"Detect the real image format using magic bytes — not file extensions.",
      'url':'/tools/image-header-inspector',
  },
  {
      "id":2,
      'title':'UUID Generator',
      'desc':"Generate random UUIDs instantly with this tool. No signup required.",
      'url':'/tools/uuid-generator',
  }
]