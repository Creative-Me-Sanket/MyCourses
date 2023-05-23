export const Register = (user) => {
    console.log(user);
    return (
        fetch("http://localhost:4000/signup",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const Login = (user) => {
    return (
        fetch("http://localhost:4000/signin",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data))
        next();
    }
}

export const Logout = (next) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt")
        next();
        window.location.reload()
        return (
            fetch("http://localhost:4000/signout",
                {
                    method: "GET",
                }).then((res) => {
                    console.log(res.json());
                }).catch((err) => console.log(err))
        )
    }
}

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false;
    }
}