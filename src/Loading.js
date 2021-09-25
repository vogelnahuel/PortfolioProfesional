import React from 'react'
import './loading.css'

export  const Loading = () => {

    const style = { "--i": 0 };
    const style2 = { "--i": 1 };
    const style3 = { "--i": 2 };
    const style4 = { "--i": 3 };
    const style5 = { "--i": 4 };
    const style6 = { "--i": 5 };
    const style7 = { "--i": 6 };
    const style8 = { "--i": 7 };
    const style9 = { "--i": 8 };
    return (
        <div className="loading-position">
            <section className="loading-section">
                    <div className="loader">
                            <div className="dot" style = { style } ></div>
                            <div className="dot" style = { style2 }></div>
                            <div className="dot" style = { style3 }></div>
                            <div className="dot" style = { style4 }></div>
                            <div className="dot" style = { style5 }></div>
                            <div className="dot" style = { style6 }></div>
                            <div className="dot" style = { style7 }></div>
                            <div className="dot" style = { style8 }></div>
                            <div className="dot" style = { style9 }></div>
                    </div>
                    <h2 className="loading-h2">Loading...</h2>
                    <div className="loader">
                            <div className="dot" style = { style } ></div>
                            <div className="dot" style = { style2 }></div>
                            <div className="dot" style = { style3 }></div>
                            <div className="dot" style = { style4 }></div>
                            <div className="dot" style = { style5 }></div>
                            <div className="dot" style = { style6 }></div>
                            <div className="dot" style = { style7 }></div>
                            <div className="dot" style = { style8 }></div>
                            <div className="dot" style = { style9 }></div>
                    </div>
            </section>

        </div>  
    )

}
export default Loading;
