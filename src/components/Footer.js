import {AiFillLinkedIn, AiFillGithub, AiOutlineTwitter} from 'react-icons/ai';

function Footer() {
    return (
        <div className="container">
            <h2>where to reach out..</h2>
            <p>email me at <a href="mailto:hw9692@bard.edu">hw9692@bard.edu</a>.</p>
            <br />
            <p> or find me here:
            <br />
                <a href="https://www.linkedin.com/in/henrywandover/" target="_blank" rel="noreferrer"><AiFillLinkedIn className="icon" />linkedin</a> <a href="https://github.com/ewhenry" target="_blank" rel="noreferrer"><AiFillGithub className="icon" />github</a> <a href="https://twitter.com/henrywandover" target="_blank" rel="noreferrer"><AiOutlineTwitter className="icon" />twitter</a>
            </p>
        </div>
    );
}

export default Footer;