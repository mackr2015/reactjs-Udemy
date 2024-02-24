import Navigation from "./Navigation"

function Header() {
  return (
    <header className="border-b font-bold p-5 flex justify-between">
      <span>My app name</span>
        <Navigation />
    </header>
  )
}

export default Header