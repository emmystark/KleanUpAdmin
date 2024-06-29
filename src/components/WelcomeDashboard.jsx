import DashboardTemp from './DashboardTemp'

function WelcomeDashboard() {
  return (
    <>
        <div>
            <DashboardTemp InitNav={true} WelcomeText='Welcome' Color='#3DA5EC' tempColor='white' ValueInText={75} NavText="Piers morgans" showAdditionalDiv={true}/>
            <div>

            </div>
      </div>
    </>
  )
}

export default WelcomeDashboard
