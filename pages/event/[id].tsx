import { useRouter } from "next/router"

export default function EventID() {
  const router = useRouter()
  const eventId = router.query.id

  return (
    <div className="screen-section flex items-center justify-center align-middle text-7xl text-black dark:text-white">
      {eventId}
    </div>
  )
}
