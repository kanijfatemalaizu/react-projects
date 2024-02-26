import Button from '../Button/Button'
import styles from './Contact.module.css'
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";


const ContactForm = () => {
  return (
    <div>
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.btn_top}>
                    <Button text ="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px"/>} />
                    <Button text ="VIA CALL" icon={<IoCallOutline fontSize="24px"/>} />
                   
                </div>
                <Button  isOutline={true} text ="VIA EMAIL FORM" icon={<FiMail fontSize="24px"/>} />

                <form action="">
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="name">Email</label>
                        <input type="email" name="email" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea rows="6" name="text" />
                    </div>
                    <div style={{ 
                        display: "flex",
                        justifyContent:"end",

                        }}>
                        <Button text="Submit"/>
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="contact-image" />
            </div>
            
          
            
        </section>
    </div>
  )
}

export default ContactForm