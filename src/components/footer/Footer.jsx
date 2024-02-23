
function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <div className="fixed bottom-0 w-full p-3 text-center bg-slate-200">
        ReactJS with vite and Tailwindcss <br/><br/>
        <ul className="text-center max-w-80 m-auto w-full">
            <li className="inline font-bold">
                <a href="https://mackraicevic.com" target="_blank">Mack Raicevic</a> 
            </li>
            <li className="inline font-bold text-sm">&nbsp;| &copy; Copyright { currentYear }</li>
        </ul>
        
    </div>
  )
}

export default Footer