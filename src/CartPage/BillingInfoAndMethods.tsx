import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "./BillingInfoAndMethods.module.scss"
import FedEx from "../img/FedEx.svg"
import DHL from "../img/DHL.svg"
import Visa from "../img/Visa.svg"
import PayPal from "../img/PayPal.svg"
import Bitcoin from "../img/Bitcoin.svg"
import SecuritySafety from "../img/SecuritySafety.svg"
import BillingInput from "../Components/Cart/BillingInput";
import { Link } from "react-router-dom";
import BillingMethod from "../Components/Cart/BillingMethod";
import PaymentMethod from "../Components/Cart/PaymentMethod";
import CartStep from "../Components/Cart/CartStep";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, clearCart } from "../Redux/ProductSlice";
import { RootState } from "../Redux/store";

const BillingInfoAndMethods = () =>{

    const {handleSubmit, register, formState: {errors, isValid} } = useForm({mode: "onBlur"})

    const dispatch = useDispatch();
    const IdOrder = useSelector( (state:RootState) => state.products.order)

    const [method, setMethod] = useState<iMethod>({
        billing:"FedEx",
        payment: "0",
        agreeSending: false,
        agreePrivate: false
    })

    const setBillingActive = (title:string) =>{
        setMethod({...method,billing: title})
    }
    const setPaymentActive = (title:string) =>{
        setMethod({...method,payment: title})
    }

    const Submit = (txt:any) =>{
        console.log(txt)
        txt.billing = method.billing
        txt.agreeSending = method.agreeSending
        txt.agreePrivate = method.agreePrivate
        txt.payment = method.payment === "0" ? 
                      "Credit Card" : 
                      method.payment === "1" ? 
                      "PayPal" :  
                      method.payment === "2" ? 
                      "Bitcoin" : 
                      null
        txt.selectedProducts = IdOrder                 
        dispatch(addOrder(txt))
        dispatch(clearCart())
        alert("Thanks for shopping :)")
    }

    return(
        
        <div className={styled.BillingInfoAndMethods}>
            <div className={styled.BillingInfoAndMethods__Direction}><Link to="/">HomePage / </Link>Cart</div>
            
            <form onSubmit={handleSubmit(Submit)}>
                <div className={styled.BillingInfoAndMethods__Form}>
                    <CartStep
                     Title="Billing info" 
                     Description="Please enter your billing info" 
                     NumStep="1"
                    />

                    <div className={styled.Form_InputRow}>
                    <BillingInput
                     Title="First name" 
                     Type="text" 
                     Placeholder="First name" 
                     Name="firstName" 
                     MaxLength={2} 
                     MinLength={2} 
                     register={register} 
                     errorsTxt={errors.firstName}
                    />
                    <BillingInput
                     Title="Last name" 
                     Type="text" 
                     Placeholder="Last name" 
                     Name="lastName" 
                     MaxLength={2} 
                     MinLength={2} 
                     register={register} 
                     errorsTxt={errors.lastName}
                    />
                        
                    </div>
                    <div className={styled.Form_InputRow}>
                    <BillingInput
                     Title="Email address" 
                     Type="email" 
                     Placeholder="Email address" 
                     Name="EmailAddress" 
                     MaxLength={30} 
                     MinLength={4} 
                     register={register} 
                     errorsTxt={errors.EmailAddress}
                    />
                    <BillingInput
                     Title="Phone number" 
                     Type="tel" 
                     Placeholder="Phone number" 
                     Name="PhoneNumber" 
                     MaxLength={12} 
                     MinLength={7} 
                     register={register} 
                     errorsTxt={errors.PhoneNumber}
                    />

                    </div>
                    <div className={styled.Form_InputRow}>
                    <BillingInput
                     Title="Address" 
                     Type="text" 
                     Placeholder="Address" 
                     Name="Address" 
                     MaxLength={40} 
                     MinLength={7} 
                     register={register} 
                     errorsTxt={errors.Address}
                    />
                    <BillingInput
                     Title="Town / City" 
                     Type="text" 
                     Placeholder="Town or city" 
                     Name="TownCity" 
                     MaxLength={30} 
                     MinLength={3} 
                     register={register} 
                     errorsTxt={errors.TownCity}
                    />
                        
                    </div>
                    <div className={styled.Form_InputRow}>
                    <BillingInput
                     Title="State / Country" 
                     Type="text" 
                     Placeholder="Choose a state or Country" 
                     Name="StateCountry" 
                     MaxLength={30} 
                     MinLength={3} 
                     register={register} 
                     errorsTxt={errors.StateCountry}
                    />
                    <BillingInput
                     Title="ZIP/Postal code" 
                     Type="text" 
                     Placeholder="Postal code or ZIP" 
                     Name="ZIP" 
                     MaxLength={30} 
                     MinLength={3} 
                     register={register} 
                     errorsTxt={errors.ZIP}
                    />
                    </div>

                    <CartStep
                     Title="Billing method" 
                     Description="Please enter your billing method" 
                     NumStep="2"
                    />
                    <div className={styled.BillingInfoAndMethods__BillingItems}>
                        <BillingMethod
                         Title="FedEx" 
                         Price={32} 
                         Image={FedEx} 
                         setActive={setBillingActive} 
                         ActiveMethod={method.billing} 
                         ActiveItem="FedEx"
                        />
                        <BillingMethod
                         Title="DHL" 
                         Price={15} 
                         Image={DHL} 
                         setActive={setBillingActive} 
                         ActiveMethod={method.billing} 
                         ActiveItem="DHL"
                        />
                      
                    </div>

                    <CartStep
                     Title="Payment method" 
                     Description="Please enter your payment method" 
                     NumStep="3"
                    />
                    {method.payment === "0" ? 
                    <PaymentMethod
                     Title="Credit card" 
                     Image={Visa} 
                     ActiveItem="0" 
                     register={register} 
                     errorCardNum={errors.CardNumber0} 
                     errorHolder={errors.holder0} 
                     errorDate={errors.date0} 
                     errorCVC={errors.CVC0}
                    />
                    :
                    <BillingMethod
                     Title="Credit card" 
                     Image={Visa} 
                     setActive={setPaymentActive} 
                     ActiveMethod={method.payment} 
                     ActiveItem="0"
                    />
                    }

                    {method.payment === "1" ? 
                    <PaymentMethod
                     Title="PayPal" 
                     Image={PayPal} 
                     ActiveItem="1" 
                     register={register} 
                     errorCardNum={errors.CardNumber1} 
                     errorHolder={errors.holder1} 
                     errorDate={errors.date1} 
                     errorCVC={errors.CVC1}
                    />
                    :
                    <BillingMethod
                     Title="PayPal" 
                     Image={PayPal} 
                     setActive={setPaymentActive} 
                     ActiveMethod={method.payment} 
                     ActiveItem="1"
                    />
                    }

                    {method.payment === "2" ? 
                    <PaymentMethod
                     Title="Bitcoin" 
                     Image={Bitcoin} 
                     ActiveItem="2" 
                     register={register} 
                     errorCardNum={errors.CardNumber2} 
                     errorHolder={errors.holder2} 
                     errorDate={errors.date2} 
                     errorCVC={errors.CVC2}
                    />
                    :
                    <BillingMethod
                     Title="Bitcoin" 
                     Image={Bitcoin} 
                     setActive={setPaymentActive} 
                     ActiveMethod={method.payment} 
                     ActiveItem="2"
                    />
                    }
                    
                    <CartStep
                     Title="Additional informations" 
                     Description="Need something else? We will make it for you!" 
                     NumStep="4"
                    />
                    <label className={styled.BillingInfoAndMethods__Notes}>Order notes</label>
                    <textarea 
                     className={styled.BillingInfoAndMethods__Area}  
                     placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..." 
                     {...register("OrderNotes", {
                                            required: false
                                        })
                     }
                    />

                    <CartStep
                     Title="Confirmation" 
                     Description="We are getting to the end. Just few clicks and your order si ready!" 
                     NumStep="5"
                    />
                    <div className={styled.BillingInfoAndMethods__Confirmation}>
                        <div className={styled.Confirmation}>
                            <div
                             className={
                              method.agreeSending ? 
                              `${styled.Confirmation_checkboxActive} ${ styled.Confirmation_checkbox}` : 
                              styled.Confirmation_checkbox
                              } 
                             onClick={() => setMethod({...method, agreeSending:!method.agreeSending})}
                            ></div>
                            <div>I agree with sending an Marketing and newsletter emails. No spam, promissed!</div>
                        </div>
                        <div className={styled.Confirmation}>
                            <div 
                             className={
                                method.agreePrivate ? 
                                `${styled.Confirmation_checkboxActive} ${ styled.Confirmation_checkbox}` : 
                                styled.Confirmation_checkbox
                                } 
                             onClick={() => setMethod({...method, agreePrivate:!method.agreePrivate})}
                            ></div>
                            <div>I agree with our <span>terms and conditions</span> and <span>privacy policy</span>.</div>
                        </div>
                        <input className={styled.Confirmation_Submit} type="submit" disabled={!isValid} value="Complete order"/>
                        <img className={styled.Confirmation_SecurityImg} src={SecuritySafety} alt="SecuritySafety"/>
                        <h6 className={styled.Confirmation_SecurityTitle}>All your data are safe</h6>
                        <p className={styled.Confirmation_SecurityTxt}>We are using the most advanced security to provide you the best experience ever.</p>
                    </div>
                
                </div>
            </form>
        </div>
    )
}

interface iMethod {
    billing:string,
    payment:string,
    agreeSending: boolean,
    agreePrivate: boolean
}
export default BillingInfoAndMethods