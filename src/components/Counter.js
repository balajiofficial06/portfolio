import React from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { styled } from "@mui/material/styles";


import axios from "axios";
import { useState } from "react";

const RootContainer = styled("div")(({ theme }) => ({
    padding: "80px 80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: '40px',
    gap: "40px",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
        padding: "40px 20px",
        height: "100vw"
    },
}));


const Counting = styled('div')(({ theme }) => ({
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
        marginTop: "5px",
        flexDirection: "column",
        height: "100%"
    },
}));

const NumberCounter = styled(CountUp)(({ theme }) => ({
    fontSize: "30px",
    color: theme.palette.text.heading,
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        fontWeight: 500,
    },
}));

const PlatformContainer = styled('a')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    color: theme.palette.text.secondary,
    fontWeight: 500,
    gap: "5px",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        fontWeight: 500,
    },
}));

function Counter() {

    const data = [{
        name: "Total sovled",
        platform: "Total",
        link: "#aboutme",
        count: 150
    }, {
        name: "LeetCode",
        platform: "LeetCode",
        link: "https://leetcode.com/balaji2002/",
        count: 100
    }, {
        name: "Coding Ninjas",
        platform: "Coding Ninjas",
        link: "https://www.codingninjas.com/studio/profile/c650648c-85a5-46e9-a51e-b6780f9eb91f",
        count: 50
    }]


    const [total, setTotal] = useState(data)

    const [counts, setCounts] = useState(false)

    const updateCount = (countsObject) => {
        // Create a new array with updated values
        const updatedTotal = total.map(item => {
            const platform = item.platform;
            return {
                ...item,
                count: countsObject[platform] !== undefined ? countsObject[platform] : item.count,
            };
        });
        // Update the state with the new array
        setTotal(updatedTotal);
    };

    const dataFetcher = async (res, req) => {
        const options = {
            method: 'GET',
            url: 'https://leetcode-api-faisalshohag.vercel.app/balaji2002',
            headers: {
                'content-type': 'application/json'
            },
        };
        axios
            .request(options)
            .then(function (response) {
                updateCount({
                    LeetCode: response.data.totalSolved,
                    "Coding Ninjas": 50,
                    Total: response.data.totalSolved + 50
                })

            })
            .catch(function (error) {
                updateCount({
                    LeetCode: 120,
                    "Coding Ninjas": 60,
                    Total: 180

                })
            });
    }
    return (
        <RootContainer>
            <ScrollTrigger onEnter={() => {
                dataFetcher()
                setCounts(true)
            }} onExit={() => { setCounts(false) }}>
                {counts && <Counting>
                    {total.map((platform) => (
                        <PlatformContainer href={platform.link} target='_blank'>
                            <NumberCounter start={0} end={platform.count} duration={2} delay={0} key={platform.platform} />
                            {platform.name}
                        </PlatformContainer>
                    ))}
                </Counting>
                }
            </ScrollTrigger>
        </RootContainer>
    )
}

export default Counter;