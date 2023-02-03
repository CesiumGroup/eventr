import { Monoton } from "@/global/fonts"
import ticketImg from "@/public/img/eventr-ticket-preview.png"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Image from "next/image"
import type { GetServerSideProps } from "next/types"

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: any) => {
  return {
    props: { ...(await serverSideTranslations(locale, ["common", "index"])) },
  }
}

export default function Home() {
  const { t } = useTranslation("index")
  return (
    <>
      <div className="screen-section flex items-center justify-center align-middle">
        <div className="flex flex-col items-center justify-center text-center align-middle">
          <h1
            className="bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-400 
                       bg-clip-text text-9xl text-transparent"
          >
            <span className={Monoton.className}>EVENTR</span>
          </h1>
          <p>{t("motto")}</p>
        </div>
      </div>

      <div className="screen-section">
        <div className="grid h-full w-full grid-flow-col grid-cols-2">
          <div className="h-full w-full">
            <Image
              src={ticketImg}
              alt="Ticket image"
              className="shadow-xl"
              placeholder="blur"
              quality={100}
            />
            <div className="bg-white"></div>
          </div>
          <div className="h-full w-full"></div>
        </div>
      </div>
    </>
  )
}
