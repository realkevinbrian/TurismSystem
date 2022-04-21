import { CalendarToday, Image } from '@material-ui/icons';
import { Add, ArrowBackRounded, TimelapseSharp } from '@mui/icons-material';
import React from 'react';
import { Container, CustomFileInput, FormBody, FormHeader, RegisterBtn, StyledInput } from './ReusableComponents';


function Cadastar() {
  

  return (
    <div className='h-screen pt-10 md:pt-5 md:h-screen bg-slate-50'>
          
          <Container>
            <div className='shadow-lg'>
                <FormHeader>
                  <ArrowBackRounded className='bg-cyan-800 text-white p-1 w-6 rounded-full'/>  
                  <h1 className='font-bold text-2xl'>Cadastro de Categorias</h1>
                </FormHeader>

                <FormBody>
                  <form>  
                      
                    <div className='grid grid-cols-2 gap-5 md:grid-cols-1'>
                      <StyledInput>
                        <label>Nome</label>
                        <input 
                        type="text" 
                        placeholder='digite o nome do evento'
                        />
                      </StyledInput>

                      <StyledInput>
                        <label>Inicio</label>
                        <input 
                        type="text" 
                        placeholder='selecione a hora de inicio'
                        onMouseEnter={(self)=>self.target.type = "time"}
                        />
                        <TimelapseSharp/>
                      </StyledInput>

                      <StyledInput>
                        <label>Valor da entrada</label>
                        <input 
                        type="text" 
                        placeholder='digite o valor da entrada'
                        />
                      </StyledInput>

                      <StyledInput>
                        <label>Local</label>
                        <input 
                        type="text" 
                        placeholder='digite o local do evento'
                        />
                      </StyledInput>

                      <StyledInput>
                        <label>Data</label>
                        <input 
                        type="text" 
                        placeholder='selecione a data do evento'
                        onClick={(self)=>self.target.type = "date"}
                        /> 
                        <CalendarToday/>
                      </StyledInput>
                    </div>

                      <CustomFileInput>
                          <div>
                          <Image className="text-cyan-800" style={{width:"70px", height:"70px"}}/>
                          <Add className="text-orange-600 translate-x-8" style={{width:"70px", height:"70px"}}/>
                          </div>
                      </CustomFileInput>

                      <RegisterBtn>
                        Cadastrar
                      </RegisterBtn>
                  </form>
                </FormBody>
            </div>

          </Container>
    </div>
  )
}

export default Cadastar