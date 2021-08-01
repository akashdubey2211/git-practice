import React from "react";
import "./style.css";
const Instruction = () => {
  return (
    <main>
      <h4 className="fq">FAQ About Vaccine</h4>
      <details>
        <summary>Is a COVID vaccine scheduled anytime soon</summary>
        <div class="content">
          <p>
            Yes, vaccine trials are under different stages of finalization.
            Government of India is geared to launch a vaccine for COVID 19 soon.
            For more information and updates visit www.mohfw.gov.in
          </p>
        </div>
      </details>
      <details>
        <summary>What are the symptoms of COVID-19?</summary>
        <div class="content">
          <p>
            The most common symptoms of COVID-19 are Fever Dry cough Fatigue
            Other symptoms that are less common and may affect some patients
            include:
            <br /> Loss of taste or smell, Nasal congestion, Conjunctivitis
            (also known as red eyes) Sore throat, Headache, Muscle or joint
            pain, Different types of skin rash, Nausea or vomiting, Diarrhea,
            Chills or dizziness. Symptoms of severe COVID‐19 disease include:
            <br />
            Shortness of breath, Loss of appetite, Confusion, Persistent pain or
            pressure in the chest, High temperature (above 38 °C). Other less
            common symptoms are: Irritability, Confusion, Reduced consciousness
            (sometimes associated with seizures), Anxiety, Depression, Sleep
            disorders, More severe and rare neurological complications such as
            strokes, brain inflammation, delirium and nerve damage. People of
            all ages who experience fever and/or cough associated with
            difficulty breathing or shortness of breath, chest pain or pressure,
            or loss of speech or movement should seek medical care immediately.
            If possible, call your health care provider, hotline or health
            facility first, so you can be directed to the right clinic.
          </p>
        </div>
      </details>
      <details>
        <summary>
          Will COVID 19 vaccine be given to everyone simultaneously
        </summary>
        <div class="content">
          <p>
            Based on the potential availability of vaccines the Government of
            India has selected the priority groups who will be vaccinated on
            priority as they are at higher risk. The first group includes
            healthcare and frontline workers. The second group to receive COVID
            19 vaccine will be persons over 50 years of age and persons under 50
            years with comorbid conditions
          </p>
        </div>
      </details>
      <details>
        <summary>Is it mandatory to take the vaccine?</summary>
        <div class="content">
          <p>
            Vaccination for COVID-19 is voluntary. However, it is advisable to
            receive the complete schedule of COVID-19 vaccine for protecting
            one-self against this disease and also to limit the spread of this
            disease to the close contacts including family members, friends,
            relatives and co-workers.
          </p>
        </div>
      </details>
      <details>
        <summary>
          How can we protect others and ourselves if we don't know who is
          infected?
        </summary>
        <div class="content">
          <p>
            Stay safe by taking some simple precautions, <br /> such as physical
            distancing, wearing a mask, especially when distancing cannot be
            maintained, keeping rooms well ventilated, avoiding crowds and close
            contact, regularly cleaning your hands, and coughing into a bent
            elbow or tissue. Check local advice where you live and work
          </p>
        </div>
      </details>
      <details>
        <summary>Is there a vaccine for COVID-19?</summary>
        <div class="content">
          <p>
            Yes. The first mass vaccination programme started in early December
            2020 and the number of vaccination doses administered is updated on
            a daily basis here.
            <br /> At least 13 different vaccines (across 4 platforms) have been
            administered. Campaigns have started in 206 economies. The
            Pfizer/BioNtech Comirnaty vaccine was listed for WHO Emergency Use
            Listing (EUL) on 31 December 2020. The SII/Covishield and
            AstraZeneca/AZD1222 vaccines (developed by AstraZeneca/Oxford and
            manufactured by the Serum Institute of India and SK Bio
            respectively) were given EUL on 16 February. <br />
            The Janssen/Ad26.COV 2.S developed by Johnson & Johnson, was listed
            for EUL on 12 March 2021. The Moderna COVID-19 vaccine (mRNA 1273)
            was listed for EUL on 30 April 2021 and the Sinopharm COVID-19
            vaccine was listed for EUL on 7 May 2021. The Sinopharm vaccine is
            produced by Beijing Bio-Institute of Biological Products Co Ltd,
            subsidiary of China National Biotec Group (CNBG).n
          </p>
        </div>
      </details>
      <details>
        <summary>
          Are antibiotics effective in preventing or treating COVID-19?
        </summary>
        <div class="content">
          <p>
            Antibiotics do not work against viruses; they only work on bacterial
            infections. COVID-19 is caused by a virus, so antibiotics do not
            work. Antibiotics should not be used as a means of prevention or
            treatment of COVID-19. In hospitals, physicians will sometimes use
            antibiotics to prevent or treat secondary bacterial infections which
            can be a complication of COVID-19 in severely ill patients. They
            should only be used as directed by a physician to treat a bacterial
            infection.
          </p>
        </div>
      </details>
    </main>
  );
};

export default Instruction;
