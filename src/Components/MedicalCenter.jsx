import React from "react";

const MedicalCenter = () => {

    return (
        <>        
            <div className="medical">
                <h2>Medical Center 1</h2>
                <div className="medical-container">                    
                    <div className="medical-fillers">
                        <div className="medIcon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <p>Orvar Bergmarks Plats 3, 70223, Örebro</p>
                    </div>
                    <div className="medical-fillers">
                        <div className="medIcon">
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        <p>(406) 666-1337</p>
                    </div>
                    <div className="medical-fillers">
                        <div className="medIcon">
                            <i className="fa-solid fa-clock"></i>
                        </div>
                        <div className="clock">
                            <div className="days">
                                <p className="mon-fri">Mon - Fri:</p>
                                <p className="nine-ten">9:00am - 10:00pm </p>
                            </div>
                            <div className="days">
                                <p className="mon-fri">Sat - Sun:</p>
                                <p className="nine-ten">9:00am - 8:00pm </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
            <div className="medical">
                <h2>Medical Center 2</h2>
                <div className="medical-container">
                    <div className="medical-fillers">
                        <div className="medIcon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <p> Fabriksgatan 43, 70223, Örebro</p>
                    </div>
                    <div className="medical-fillers">
                        <div className="medIcon">
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        <p>(406) 777-1337</p>
                    </div>
                    <div className="medical-fillers">
                        <div className="medIcon">
                            <i className="fa-solid fa-clock"></i>
                        </div>
                        <div className="clock">
                            <div className="days">
                                <p className="mon-fri">Mon - Fri:</p>
                                <p className="nine-ten">9:00am - 10:00pm </p>
                            </div>
                            <div className="days">
                                <p className="mon-fri">Sat - Sun:</p>
                                <p className="nine-ten">9:00am - 8:00pm </p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>         
        </>



    )

}
export default MedicalCenter