var picture1 = '../assets/pics/amanyT/bb-court.jpg'
var picture2 = '../assets/pics/amanyT/b-hal.jpg'
var picture3 = '../assets/pics/amanyT/pground.jpg'
var text1 = `<p>Welcome to our vibrant subdivision village, where we take pride in offering top-notch amenities for our residents. Among the many features that make our community special, we are thrilled to introduce our brand new basketball court. This state-of-the-art facility is designed to cater to the needs of basketball enthusiasts of all ages, providing a space for friendly games, skill-building, and healthy competition.</p>
<p>Located at the heart of our community, our basketball court is a place where neighbors can come together, bond, and enjoy their shared love for the game. The court boasts a sleek and modern design, complete with a high-quality playing surface and well-maintained surroundings. Whether you're a seasoned player or just looking to have some fun, our court offers an inviting environment that promotes physical activity and a sense of community.</p>
<p>Equipped with professional-grade basketball hoops and court markings, our facility meets the standards of regulation basketball courts. This allows players to hone their skills and enjoy a true basketball experience right within the comfort of our subdivision. The court is spacious enough to accommodate multiple games simultaneously, ensuring that everyone has a chance to participate and enjoy their time on the court.</p>
<p>Safety is our top priority, and our basketball court reflects this commitment. We have installed high-quality lighting to enable evening play, ensuring that residents can enjoy the court even after sunset. The court is also surrounded by a secure fence to provide a safe and enclosed environment. Additionally, we have placed benches and shade structures nearby, providing comfortable seating areas for spectators and players alike.</p>
`

var text2 = `<p>Welcome to our thriving subdivision village, where we strive to provide exceptional amenities for our residents. We are delighted to introduce our newly built function hall, a versatile and elegant space designed to host a variety of events and gatherings. Whether you're planning a wedding reception, a community meeting, or a milestone celebration, our function hall offers the perfect setting to make your event a memorable one.</p>
<p>Nestled within our picturesque community, our function hall combines modern design with warm and inviting ambiance. The hall boasts a spacious interior, capable of accommodating a large number of guests, and features tasteful decor that can be customized to suit your event's theme or style. With its flexible layout, our function hall provides endless possibilities to create the perfect atmosphere for any occasion.</p>
<p>Equipped with state-of-the-art audiovisual systems, including projectors and sound equipment, our function hall ensures that your presentations, speeches, and performances are seamlessly integrated into your event. Additionally, we offer high-speed internet access, allowing you to connect with your guests and stream content effortlessly. Our dedicated staff is available to assist with any technical requirements, ensuring that your event runs smoothly from start to finish.</p>
<p>We understand the importance of culinary experiences in creating unforgettable events. Our function hall features a spacious and fully equipped kitchen, where talented chefs can prepare delectable menus tailored to your preferences. Whether you're hosting a formal sit-down dinner or a casual buffet, our culinary team is committed to delivering exceptional cuisine that will delight your guests' taste buds and leave a lasting impression.</p>

`

var text3 = `<p>Welcome to our vibrant subdivision village, where we prioritize the well-being and happiness of our residents, especially the younger ones. We are thrilled to introduce our newly constructed playground, a safe and exciting space designed to foster creativity, physical activity, and endless fun. Our playground is a place where children can explore, make new friends, and create lasting memories in a secure and engaging environment.</p>
<p>Located at the heart of our community, our playground is thoughtfully designed with age-appropriate equipment that caters to children of all ages, from toddlers to older kids. The playground features a diverse range of structures, including swings, slides, climbing frames, and interactive play panels, providing a wide variety of play experiences that promote physical development, balance, and coordination.</p>
<p>Safety is our utmost priority, and our playground reflects this commitment. We have installed impact-absorbing surfaces beneath play equipment to minimize the risk of injury, ensuring a soft landing for children. The playground is also securely fenced, with clear sightlines for supervision, allowing parents and guardians to comfortably watch over their little ones while they play. Regular maintenance and inspections are conducted to ensure that the playground remains in top condition at all times.</p>
<p>Inclusivity is a fundamental aspect of our playground. We have incorporated accessible features to ensure that children of all abilities can enjoy the space fully. This includes wheelchair-accessible ramps, inclusive swings, and sensory play elements that cater to a diverse range of needs. Our goal is to create an inclusive environment where all children feel welcome, valued, and able to participate in play alongside their peers.</p>
`


const cardContent = [text1,text2,text3]
const cardTitle = ['Basketball Court','Bayanihan Hall','Playground']
const pictures = [picture1, picture2,picture3];

function showPopup(cardID) {
    document.getElementById("popup").style.display = "block";

    var popupTitle = document.querySelector('#popup .popup-content .popup-info-content .popUpinfo h1');
    var popupContent = document.querySelector('#popup .popup-content .popup-info-content .popUpinfo p');
    var popupPic = document.querySelector('#popup .popup-content .popup-info-content img');
    
    popupTitle.innerHTML = cardTitle[cardID-1];
    popupContent.innerHTML = cardContent[cardID-1];
    popupPic.src = pictures[cardID-1];
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

