// Nextjs 14 Server actions
'use server';

import { ActusEmailTemplate } from "./email.template";
import { User } from "./actus.context";

type SendEmailProps = {
    user: User;
    resultados: any;
    mbti: string;
}
export async function sendEmail ({user, resultados, mbti} : SendEmailProps) {

}