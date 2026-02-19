import { useState } from 'react'
import StepGeneral from './steps/StepGeneral'
import StepItems from './steps/StepItems'
import StepDocuments from './steps/StepDocuments'
import StepConfirm from './steps/StepConfirm'
import './ShoppingWizard.css'

const ShoppingWizard = ({
  data,
  onChange,
  onSave,
  readOnly = false,
  mode = 'new',
  role = 'analista'
}) => {
  const [step, setStep] = useState(1)

  const next = () => setStep(s => Math.min(s + 1, 4))
  const prev = () => setStep(s => Math.max(s - 1, 1))

  return (
    <div className="shopping-wizard">

      {step === 1 && (
        <StepGeneral
          data={data}
          onChange={onChange}
          readOnly={readOnly}
        />
      )}

      {step === 2 && (
        <StepItems
          data={data}
          onChange={onChange}
          readOnly={readOnly}
        />
      )}

      {step === 3 && (
        <StepDocuments
          data={data}
          onChange={onChange}
          role={role}
          readOnly={readOnly}
        />
      )}

      {step === 4 && (
        <StepConfirm
          data={data}
        />
      )}

      {/* Navegación */}
      <div className="wizard-actions">
        {step > 1 && (
          <button className="btn-secondary" onClick={prev}>
            Atrás
          </button>
        )}

        {step < 4 && (
          <button className="btn-primary" onClick={next}>
            Siguiente
          </button>
        )}

        {step === 4 && !readOnly && (
          <button className="btn-success" onClick={() => onSave(data)}>
            Guardar Compra
          </button>
        )}
      </div>

    </div>
  )
}

export default ShoppingWizard
