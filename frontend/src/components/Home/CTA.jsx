import Button from "../ui/Button";
import {Link} from "react-router-dom"

function CTA(){
    return(
<section className="py-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
<div className="container mx-auto px-4">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Make an Impact?
    </h2>
    <p className="text-xl text-gray-300 mb-8">
      Join thousands of donors who are already making a difference through
      our platform.
    </p>
    <div className="flex  gap-4 justify-center">
     <Link to="/dashboard"><Button size="lg">
        Connect Wallet
      </Button></Link>
      <Button size="lg" variant="outline">
        Learn More
      </Button>
    </div>
  </div>
</div>
</section>
);
}

export default CTA;