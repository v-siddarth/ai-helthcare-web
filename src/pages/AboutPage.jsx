import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle'
import About from '../components/about';
import ProcessSection from '../components/ProcessSection';
import FunFact from '../components/FunFact';
import TeamSection from '../components/TeamSection';
import CtaSectionS2 from '../components/CtaSectionS2';
import BlogSection from '../components/BlogSection';
import CtafromSection from '../components/CtafromSection';
import Footer from '../components/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '../images/logo-2.svg'


const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'About Us'} pagesub={'About Us'} />
            <About hclass={'about_section section-padding s4'} />
            <ProcessSection hclass={"work_section_s2 section-padding"} />
            <FunFact hclass={'funfact_section'} />
            <TeamSection hclass={'team_section_s2 section-padding'} />
            <CtaSectionS2 />
            <BlogSection tClass={'blog_section section-padding'} />
            <CtafromSection hclass={'ctafrom_section'} />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />

        </Fragment>
    )
};
export default AboutPage;
