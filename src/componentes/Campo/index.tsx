import "./Campo.css";

interface CampoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio?: boolean;
  tipo?: "text" | "password" | "date" | "email" | "number";
};

const Campo = ({ aoAlterado, placeholder, label, valor, obrigatorio = false, tipo = "text" }: CampoProps) => {

  const placeholderModificada = `${placeholder}...`

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>
        {label}
      </label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
        type={tipo}
      />
    </div>
  );
};

export default Campo;
