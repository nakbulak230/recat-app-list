
import { object, string } from 'yup';

    const zorunlıMesaj="Bu Alana Giriş Zorunlu";
    const minMesaj="En az 5 karekter girmeniz gerekiyor..";
    const emailMesaj="Geçerli email girin ";
    const contactSchema = object({
        firstName: string().required(zorunlıMesaj),
        lastName:string().required(zorunlıMesaj),
        email:string().email(emailMesaj).required(zorunlıMesaj),
        message:string().min(5,minMesaj).required(zorunlıMesaj),      
      });


export default contactSchema;