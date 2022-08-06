import { NextPage } from "next";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { AccessTokenProps } from "../types/AccessTokenProps";

export const Home:NextPage<AccessTokenProps> = ({setAccessToken}) => {

    const sair =() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userName');
        localStorage.removeItem('userMail');
        setAccessToken('');

    }

    return (
        <>  
            <Header sair={sair} />
            <Footer />
        </>
    );
}