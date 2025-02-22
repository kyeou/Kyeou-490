
    import Header from "../../../components/Header";
    import Box from '@mui/system/Box'
    // import WebFont from 'webfontloader';

    const titleStyle = { color: '#E31C25', justifyContent: "center", textAlign: "center" }
    const redBoldStyle = { color: 'red', fontWeight: 'bold', textDecorationLine: 'underline', padding: "10px", textAlign: "left" }
    const subRedBoldStyle = { color: 'red', textDecorationLine: 'underline', textAlign: "left", marginLeft: "4%" }
    const subHeaderStyle = { color: 'black', fontweight: 'heavy', textDecorationLine: 'underline', padding: "2px", }

    const list_style = { marginLeft: "4%" }
    const sublist_style = { padding: "10px", marginLeft: "6%" }
    const subsequence_style = { padding: "5px" }

    const fineprint_style = { fontWeight: 'bold' }
    const option_style = { marginLeft: "2%", padding: "5px" }
    const information_style = { inlineSize: "1100px", overflowWrap: "break-word", padding: "10px", marginLeft: "2%" }
    const summary_style = { marginLeft: "2%", color: '#18E67F', fontWeight: 'bold', textDecorationLine: 'underline', textAlign: "left", fontSize: "20px" }


    function _81A9() {
        return (

            <div style={{ backgroundColor: "black", paddingBottom: "50px" }}>
                <Header></Header>
                <span className="font-link">
                    <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: '50px', width: '80%', outlineStyle: "solid", outlineColor: "red", borderRadius: "25px" }}>
                        <Box color="white" bgcolor="#000000" p={1}>
                            <div style={{ marginLeft: '1%', padding: "" }}>
                            <h2 style={{ color: '#E31C25', justifyContent: "center", textAlign: "center" }}>B.A., Asian American Studies: Double Major</h2><div style={titleStyle}>Program Requirements</div><div style={redBoldStyle}>1. Core Courses (21 units)</div>
<ul style={list_style}>
<li>Take all seven courses:</li>
<ul style={option_style}>
<li>AAS 100 Introduction to Asian American Studies (3)</li>
<li>or AAS 345 Contemporary Issues in Asian American Studies (3)</li>
</ul>
<li>AAS 201 Race, Racism and Critical Thinking (3)</li>
<li>AAS 210 History of Asians in America (3)</li>
<ul style={option_style}>
<li>AAS 220 Survey of Asian American Literature (3)</li>
<li>or AAS 230 Asian Americans and the Media (3)</li>
</ul>
<li>AAS 311 Research Methods in Asian American Studies (3)</li>
<li>AAS 360 Asian American Immigration–Global Perspective (3)*</li>
<li>AAS 390/F Asian American Communities: Field Practicum (2/1)</li>
<li>*Or an equivalent course in another department/program.</li>
</ul>
<div style={redBoldStyle}>2. Area Courses (6 units)</div>
<ul style={list_style}>
<li>Select any two courses:</li>
<li>Cultural and Literary Studies</li>
<li>AAS 321 Asian American Fiction (3)</li>
<li>AAS 325A Asian American Creative Studies Workshop: Literary Arts (3)</li>
<li>AAS 325B Asian American Creative Studies Workshop: Performance Arts (3)</li>
<li>AAS 420 Asian American Literary Self-Representations (3)</li>
<li>AAS 430 Asian American Popular Culture (3)</li>
<li>Ethnic and Comparative Experiences</li>
<li>AAS 355 Biracial and Multiracial Identity (3)</li>
<li>AAS 361A-Z Asian American Experience of Selected Groups (3)</li>
<li>An upper division course from another ethnic studies program/department or intermediate-level language course (3 units).</li>
<li>Gender and Sexuality Studies</li>
<li>AAS 340 Asian American Women (3)</li>
<li>AAS 455 Asian American Sexuality (3)</li>
<li>Law, Policy and Institutions</li>
<li>AAS 347 Asian American Politics and the Law (3)</li>
<li>AAS 417 Equity and Diversity in Schools (3)</li>
<li>AAS 440 Urbanization and Asian American Communities (3)</li>
<li>Social Relations and Family</li>
<li>AAS 350 Asian American Personality and Mental Health (3)</li>
<li>AAS 450 Asian American Child and the Schools (3)</li>
<li>AAS 453 Asian American Families (3)</li>
</ul>
<div style={redBoldStyle}>3. Advanced Seminar/Special Topics Course (3 units)</div>
<ul style={list_style}>
<li>Select one of the following:</li>
<li>AAS 495 Selected Topics in Asian American Studies (3)</li>
<li>AAS 497 Senior Seminar in Asian American Studies (3)</li>
</ul>
<br></br><ul style={summary_style}>
<li>Total Units in the Double Major Option: 30</li>
</ul>
  </div>
                    </Box>
                </div>
            </span>
        </div>
    )
}
export default _81A9