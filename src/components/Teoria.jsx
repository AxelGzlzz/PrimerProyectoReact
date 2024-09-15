const Teoria = (props) => {
    return (
        <article>
           <h3>Componentes</h3> 
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dicta sint non eum maiores unde quia! Sequi expedita debitis quibusdam autem totam quod deleniti perferendis nobis quaerat. Nemo corporis nesciunt, repellendus neque ullam amet ipsum sequi explicabo cumque fugit perspiciatis excepturi ducimus maiores at, exercitationem iusto quaerat eos quod tempora qui porro aliquam modi facere! Tempora quis maxime tenetur, expedita voluptatibus, accusantium nam, alias minima maiores quae vitae animi sit quos dolorum laudantium quidem ipsa aliquam repellat optio! Corporis necessitatibus voluptates doloremque ut incidunt aspernatur corrupti sapiente, nam est quia laborum, pariatur cum. Ad laudantium eius quo assumenda eum! Vitae.</p>
       {/* props de padre a hijo */}
         <h4>Comision: {props.comision} - Año Actual :{props.anioActual} </h4>
        </article>
    );
};

export default Teoria;