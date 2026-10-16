import {X} from "lucide-react"
const Model = ({isOpen,onClose,title,children}) => {

    if(!isOpen) return null;

    const handleBackdropClick =(e) =>{
        if(e.target === e.currentTarget){
            onClose();
        }
;
    }
  return (
    <div className="fixed inset-0 bg-black/50 z-50 center-item
    p-4" onClick={handleBackdropClick}>

        <div className="bg-white rounded-2xl shadow-wcl max-2-md
        w-full p-6 max-h-[80vh]" overflow-y-auto>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-zinc-900">{title}</h2>

                <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600
                transition" aria-label="Close model">

                    <X size ={24} />
                </button>
            </div>


            {children}
        </div>
    </div>
  )
}

export default Model