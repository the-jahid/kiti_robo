import { Button } from '@/components/ui/button';

const AcceptDeleteModal = ({ id, title, buttonText, buttonColor, onConfirm }) => (
    <div>
        <Button className={`btn ${buttonColor}`} onClick={() => document.getElementById(id).showModal()}>{buttonText}</Button>
        <dialog id={id} className="modal w-full ">
            <div className="modal-box bg-white w-lg space-y-3 ">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">{title}</h3>
                <Button className='bg-primary' onClick={onConfirm}>Confirm</Button>
            </div>
        </dialog>
    </div>
);

export default AcceptDeleteModal;

