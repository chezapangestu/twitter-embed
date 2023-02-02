import React, { useState, useEffect } from "react";

function Switch(){
    const [theme, setTheme] = useState("light");

    useEffect(() => {
    if (theme ==="dark"){
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
    }, [theme]);

    const handleThemeSwitch = () =>{
    setTheme(theme === "dark" ? "light" : "dark");
    };
    return(<div>
        <div onClick={handleThemeSwitch} className="font-bold dark:text-white border">Click to change theme</div>
    </div>
    )
}

export default Switch;