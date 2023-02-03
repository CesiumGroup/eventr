import { Monoton } from "@/global/fonts"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetServerSideProps } from "next/types"

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
          <h1 className="text-7xl">
            <span className={Monoton.className}>EVENTR</span>
          </h1>
          <p>{t("motto")}</p>
        </div>
      </div>
      <div className="screen-section"></div>
    </>
  )
}
