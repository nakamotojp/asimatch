import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  // メール送信の設定
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password'
    }
  })

  const mailOptions = {
    from: 'your-email@example.com',
    to: 'otoiawase@asimatch.com',
    subject: '新しいお問い合わせ',
    text: `
      名前: ${name}
      メールアドレス: ${email}
      メッセージ: ${message}
    `
  }

  const userMailOptions = {
    from: 'your-email@example.com',
    to: email,
    subject: 'お問い合わせありがとうございます',
    text: `
      ${name}様

      お問い合わせありがとうございます。
      以下の内容で承りました。

      メッセージ:
      ${message}

      担当者より順次ご連絡いたします。
      今しばらくお待ちください。

      Asimatch株式会社
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(userMailOptions)
    return NextResponse.json({ message: 'お問い合わせを受け付けました。' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'エラーが発生しました。' }, { status: 500 })
  }
}
