import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';

interface Props {
  value: any;
  onShowChange: (v: boolean) => void;
}

export function ShopBooking(props: Props) {
  const className = 'modal fade show';
  const styles = { display: 'block', paddingRight: '15px', backgroundColor: 'rgba(0,0,0,0.5)', };
  const firebase = useFirebase();
  const user = sessionStorage.getItem('user');
  const [book, setBook] = useState(false);

  const onSubmitBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await firebase.firestore().collection('book').doc().set({
      uid: JSON.parse(user!).uid,
      email: JSON.parse(user!).email,
      phone: (e.target as any).phone.value,
      created: new Date(),
      car: {
        id: props.value.id,
        title: props.value.title,
        price: props.value.price,
        image: props.value.image[0]
      }
    });

    setBook(true);
  }

  return (
    <div className={className} id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={styles}>
      <form onSubmit={onSubmitBooking}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Booking</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => props.onShowChange(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {
                book ? <div>Thank you for your booking. <b className="text-danger">WESALECAR</b> will contect you soon. </div> :
                  <div className="form-group">
                    <input type="text" name="phone" className="form-control" placeholder="Enter your phonenumber..." required autoFocus />
                  </div>
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.onShowChange(false)}>Close</button>
              {!book && <button type="submit" className="btn btn-primary">Book</button>}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}