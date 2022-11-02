import "./header.css"
import cv_french from '../../assets/documents/cv_french.pdf'
import cv_english from '../../assets/documents/cv_english.pdf'

const CTA = () => {
    return(<div className="cta">
        <a href={cv_french} download className="btn">Download French CV</a>
        <a href={cv_english} download className="btn btn-primary">Download English CV</a>
        <a href="#contact" className="btn">Contact Me</a>
    </div>)
}

export default CTA;