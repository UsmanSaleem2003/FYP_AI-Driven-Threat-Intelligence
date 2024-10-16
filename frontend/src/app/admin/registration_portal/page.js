"use client";
import "./registration_portal.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const [fullname, setfullname] = useState(null);
    const [email, setemail] = useState(null);
    const [username, setusername] = useState(null);
    const [password, setpassword] = useState(null);
    const [confirmpassword, setconfirmpassword] = useState(null);
    const [gender, setgender] = useState("Male");
    const [birthdate, setbirthdate] = useState(null);

    // logic based need
    const [loading, setloading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);





        //after evaluation, uncomment all required lines.

        // // Get current date
        // const currentDate = new Date();

        // // Get selected birthdate
        // const selectedBirthdate = new Date(birthdate);

        // // Calculate the age based on the birthdate
        // var age = currentDate.getFullYear() - selectedBirthdate.getFullYear();

        // // Adjust the age calculation if the current date is before the birthday this year
        // if (currentDate.getMonth() < selectedBirthdate.getMonth() ||
        //     (currentDate.getMonth() === selectedBirthdate.getMonth() && currentDate.getDate() < selectedBirthdate.getDate())) {
        //     age--;
        // }

        // // Validate age
        // if (age < 18) {
        //     setError('You must be at least 18 years old to sign up.');
        //     return;
        // }

        // // Validate birthdate range (allowing selection from more than one century ago)
        // const minBirthdate = new Date();
        // minBirthdate.setFullYear(minBirthdate.getFullYear() - 100); // 100 years ago

        // if (selectedBirthdate > currentDate || selectedBirthdate < minBirthdate) {
        //     setError('Please select a valid birthdate.');
        //     return;
        // }



        // make API call for user registration and authentication
        router.push("/pages/dashboard");
    };

    return (
        <div className="registration">
            <div cla ssName="registration-title">
                <h1 className="registration-title-span">Register User</h1>
            </div>

            <form className="registration-form" onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input
                    type="text"
                    placeholder="Enter full name"
                    className="input-field"
                    value={fullname}
                    onChange={(e) => {
                        setfullname(e.target.value);
                    }}
                //required
                />

                <label>Username</label>
                <input
                    type="text"
                    placeholder="Enter unique username"
                    className="input-field"
                    value={username}
                    onChange={(e) => {
                        setusername(e.target.value);
                    }}
                //required
                />

                <label>Email</label>
                <input
                    type="text"
                    placeholder="Enter email"
                    className="input-field"
                    value={email}
                    onChange={(e) => {
                        setemail(e.target.value);
                    }}
                //required
                />

                <div className='registration-selections'>
                    <div className='registration-selections'>
                        <label htmlFor="gender-selection">Select Gender : </label>
                        <div className="select-container">
                            <select
                                value={gender}
                                onChange={(e) => setgender(e.target.value)}
                            //required
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="arrow">&#9660;</div>
                        </div>
                    </div>
                </div>

                <div className='birthdate'>
                    <label className='birthdate-label'>Select Birthdate : </label>
                    <input
                        type='date'
                        className='input-field'
                        value={birthdate}
                        name='birthdate'
                        placeholder='Birthdate'
                        onChange={(e) => setbirthdate(e.target.value)}
                    //required
                    />
                </div>

                <label>Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="input-field"
                    value={password}
                    onChange={(e) => {
                        setpassword(e.target.value);
                    }}
                //required
                />

                <label>Confirm Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className="input-field"
                    value={confirmpassword}
                    onChange={(e) => {
                        setconfirmpassword(e.target.value);
                    }}
                //required
                />

                <div className="show-password">
                    <label className="show-password-checkbox">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <span className="show-password-text">Show Password</span>
                    </label>
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="registration-button" disabled={loading}>
                    {loading ? "Registering" : "Register"}
                </button>
            </form>
        </div>
    );
}
