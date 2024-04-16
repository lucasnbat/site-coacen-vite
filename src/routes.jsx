import { /*createBrowserRouter*/ Routes, Route } from 'react-router-dom'
import { LayoutApp } from './_layouts/layoutApp.jsx'
import { Home } from './app/home/Home.jsx'
import { Contact } from './app/contact/Contact.jsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}