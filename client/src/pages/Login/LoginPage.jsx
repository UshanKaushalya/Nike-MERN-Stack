import {headerLogo} from "../../assets/images/index.js";
import {Link, Navigate} from "react-router-dom";
import {useState} from "react";

export function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [red, setRed] = useState(false);

    async function login(ev) {
        ev.preventDefault();

        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

        if(response.ok){
            setRed(true);
        }else{
            alert('Wrong credentials...')
        }
    }


    if(red && email == 'ushanwk22@gmail.com'){
        return <Navigate to={'/admin'} />
    }

    if(red){
        return <Navigate to={'/'} />
    }

    return (
        <section className="bg-gray-50 pt-12 pb-72">
            <div className="flex flex-col items-center px-6 py-8 mx-auto lg:py-0">

                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white pb-8">
                            Login into your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input type="email" name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Enter your email..." required=""
                                       value={email}
                                       onChange={(ev) => {
                                           setEmail(ev.target.value)
                                       }}
                                />
                            </div>

                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""
                                       value={password}
                                       onChange={(ev) => {
                                           setPassword(ev.target.value)
                                       }}
                                />
                            </div>

                            <div className='flex flex-wrap gap-4 justify-center' onClick={login}>
                                <Link to={'/login'}
                                      className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full bg-coral-red text-white">
                                    Login
                                </Link>
                            </div>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have'nt an account? <Link to='/register'
                                                            className="font-medium text-primary-600 hover:underline text-coral-red">Register here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}