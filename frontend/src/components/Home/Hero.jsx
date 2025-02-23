import {Link} from 'react-router-dom'
import Button from '../ui/Button';

function Hero(){
    return(
        <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Change Through Blockchain
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A decentralized donation platform that uses AI to automate impact tracking
              and ensure transparent fund distribution.
            </p>
            <Link to="/dashboard/donate">
              <Button size="lg" className=" bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Start Donating
              </Button>
              <Button size="lg" className="ml-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-800 hover:to-yellow-600">
                Ask Donation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    )
}




export default Hero;