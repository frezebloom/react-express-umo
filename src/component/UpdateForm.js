import React, { Component } from "react";
import { connect } from "react-redux";
import { DatePickerInput } from "rc-datepicker";

import "moment/locale/ru.js";
import "rc-datepicker/lib/style.css";

class DocForm extends Component {
  constructor(props) {
    super(props);

    this.newStateShowUpdateValidation = this.newStateShowUpdateValidation.bind(
      this
    );
    this.newStateUpdateForm = this.newStateUpdateForm.bind(this);
    this.newStateTrashModalWindow = this.newStateTrashModalWindow.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleClickHintSubdivision = this.handleClickHintSubdivision.bind(
      this
    );
    this.handleClickHintPosition = this.handleClickHintPosition.bind(this);
    this.termOfTraining = this.termOfTraining.bind(this);
    this.trainingInTheUTC = this.trainingInTheUTC.bind(this);
    this.trainingInTheUnit = this.trainingInTheUnit.bind(this);
    this.registrationDateOfTheProgram = this.registrationDateOfTheProgram.bind(
      this
    );
    this.dateOfDelivery = this.dateOfDelivery.bind(this);

    this.state = {
      hintSubdivision: [],
      hintPosition: [],
      showHintSubdivision: false,
      showHintPosition: false,
      id: ""
    };
  }

  componentDidMount() {
    let data = this.props.data.updateDocument[
      this.props.data.updateDocument.length - 1
    ];

    this.setState({
      id: data.id,
      programmNumber: data.programmNumber,
      fullName: data.fullName,
      company: data.company,
      personnelCategory: data.personnelCategory,
      subdivision: data.subdivision,
      position: data.position,
      theoreticalTraining: data.theoreticalTraining,
      practicalTraining: data.practicalTraining,
      internship: data.internship,
      termOfTraining: data.termOfTraining,
      trainingInTheUTC: data.trainingInTheUTC,
      trainingInTheUnit: data.trainingInTheUnit,
      registrationDateOfTheProgram: data.registrationDateOfTheProgram,
      dateOfDelivery: data.dateOfDelivery,
      fullNameProgram: data.fullNameProgram,
      link: data.link,
      status: 1
    });

    //Выбор selected COMPANY по умолчанию
    let companyData = document.getElementById("company");
    for (let i = 0; companyData.length > i; i++) {
      if (companyData[i].value === data.company) {
        let select = companyData[i].value;
        let option =
          '<option selected value="' + select + '">' + select + "</option>";
        document.getElementById("company").innerHTML += option;
        break;
      }
    }

    //Выбор selected personnelCategory по умолчанию
    let personnelCategoryData = document.getElementById("personnelCategory");
    for (let i = 0; personnelCategoryData.length > i; i++) {
      if (personnelCategoryData[i].value === data.personnelCategory) {
        let select = personnelCategoryData[i].value;
        let option =
          '<option selected value="' + select + '">' + select + "</option>";
        document.getElementById("personnelCategory").innerHTML += option;
        break;
      }
    }
  }

  //Обработка данных юзера,

  handleUserInput(event) {
    var value = event.target.value.toLowerCase();
    var name = event.target.name;

    var hint = data => {
      return data.includes(value);
    };

    if (name === "subdivision") {
      var subdivision = [
        "административно-техническое управление",
        "административно-хозяйственный отдел",
        "бухгалтерия",
        "казначейство",
        "конструкторско-технологический отдел",
        "лаборатория психофизиологического обеспечения",
        "отдел вывода из эксплуатации",
        "отдел дефектоскопии металлов и технического конроля",
        "отдел документационного обеспечения",
        "отдел защиты государственной тайны",
        "отдел инспекций и контроля за обеспечением безопасности",
        "отдел информационно-коммуникационных технологий",
        "отдел имущественных отношений",
        "отдел использования опыта эксплуатации и расследования нарушений",
        "отдел кадров",
        "отдел классификации расходов и учета договорных обязательств",
        "отдел лицензирования",
        "отдел метрологии",
        "отдел международного и внешнеэкономического сотрудничества",
        "отдел модернизации и продления ресурса",
        "отдел организации входного контроля и оценки соответствия",
        "отдел мобилизационной подготовки, гражданской обороны и чрезвычайных ситуаций, аварийных центров",
        "отдел организации и оплаты труда",
        "отдел охраны окружающей среды",
        "отдел охраны труда",
        "отдел пожарной безопасности",
        "отдел подгоовки и проведения ремонтов",
        "отдел по ремонту зданий",
        "отдел радиационной безопасности",
        "отдел развития персонала",
        "отдел радиационных технологий",
        "отдел социального развития",
        "отдел технической диагностики",
        "отдел технической инспекции и промышленной безопасности",
        "отдел управления качеством",
        "отдел управления ремонтом",
        "отдел экономической безопасности",
        "отдел ядерной безопасности и надежности",
        "отдел модернизации и продления ресурса",
        "проектный офис «Международный центр подготовки персонала»",
        "произвоственно-техничнеский отдел",
        "планово-экономический отдел",
        "реакторный цех 1-й очереди",
        "реакторный цех 2-й очереди",
        "служба безопасности",
        "секретариат",
        "санаторий-профилакторий «Копанское»",
        "служба технологического управления 1-й очереди",
        "служба технологического управления 2-й очереди",
        "транспортный цех",
        "турбинный цех",
        "управление закупок",
        "управление информации и общественных связей",
        "управление капитального строительства",
        "управление производственно-технологической комплектации",
        "учебно-тренировочный центр",
        "химический цех",
        "цех водоснабжения",
        "цех вентиляции",
        "цех гидротехнических сооружений",
        "цех дезактивации",
        "цех по обращению с РАО",
        "цех обеспечивающих систем",
        "цех тепловой автоматики и измерений",
        "цех хранения и обращения с ядерным топливом",
        "цех централизованного ремонта",
        "электрический цех",
        "юридический отдел"
      ];

      if (value.length > 0) {
        var a = subdivision.filter(hint);
        this.setState({
          hintSubdivision: a,
          showHintSubdivision: true
        });
      } else {
        this.setState({
          showHintSubdivision: false
        });
      }
      if (this.state.hintSubdivision.length === 0) {
        this.setState({
          showHintSubdivision: false
        });
      }
    }
<<<<<<< HEAD
=======
   //Открытие и закрывания формы TrashModalWindow
    newStateTrashModalWindow(){
      this.props.newStateUpdateForm(false);
      this.props.newStateTrashModalWindow(true);
      this.props.updateDocument(this.state);
    }

  //Дата срока подготовки обучения
    termOfTraining(date){
      this.setState({
        termOfTraining: date
      })
     }

   //Дата обучения в УТЦ
     trainingInTheUTC(date){
       this.setState({
         trainingInTheUTC: date
       })
      }
>>>>>>> bf8b45855b2f573fb807351f2ccb5221d1cbaf51

    if (name === "position") {
      var position = [
        "аппаратчик по приготовлению и химреагентов",
        "аппаратчик химводоочистки электростанции",
        "архивист",
        "бухгалтер",
        "ведущий бухгалтер",
        "ведущий инженер",
        "ведущий инженер по метрологии",
        "ведущий инженер по организации и нормированию труда",
        "ведущий инженер по организации труда",
        "ведущий инженер по организации эксплуатации и ремонту",
        "ведущий инженер по радиационной безопасности",
        "ведущий инженер по техническому надзору",
        "ведущий инженер по управлению блоком атомной станции",
        "ведущий инженер по управлению реактором",
        "ведущий инженер по управлению турбиной",
        "ведущий инженер по эксплуатации оборудования",
        "ведущий инженер(по эксплуатации)(сменный)",
        "ведущий инженер(по реконструкции)",
        "ведущий инженер-конструктор",
        "ведущий инженер-программист",
        "ведущий инженер-технолог",
        "ведущий инженер-химик",
        "ведущий инженер-электроник",
        "ведущий психолог (руководитель группы)",
        "ведущий специалист",
        "ведущий специалист по кадрам",
        "ведущий технолог",
        "ведущий экономист",
        "ведущий юрисконсульт",
        "водитель автомобиля",
        "врач",
        "врач по лечебной физкультуре",
        "врач-психотерапевт",
        "врач-терапевт",
        "врач-физиотерапевт",
        "геодезист",
        "главная медицинская сестра",
        "главный бухгалтер",
        "главный врач(он же начальник РРО)",
        "главный инженер",
        "главный инспектор",
        "главный метролог-начальник отдела метрологии",
        "главный специалист",
        "главный технолог",
        "дезактиваторщик",
        "дефектоскопист по газовому и жидкостному контролю",
        "дефектоскопист по магнитному и ультразвуковому контролю",
        "дефектоскопист рентгено-гаммографирования",
        "диспетчер",
        "дозиметрист",
        "документовед",
        "заведующий архивом",
        "заведующий научно-технической библиотекой",
        "заведующий хозяйством",
        "заведующий центральным складом",
        "замерщик на топографо-геодезических и маркшейдерских работах",
        "заместитель  директора по экономике и финансам",
        "заместитель генерального директора - директор филиала ОАО «Концерн Росэнергоатом» «Ленинградская атомная станция»",
        "заместитель главного бухгалтера",
        "заместитель главного инженера по безопасности и надежности",
        "заместитель главного инженера по инженерной поддержке",
        "заместитель главного инженера по модернизации",
        "заместитель главного инженера по подготовке персонала - начальник учебно-тренировочного центра",
        "заместитель главного инженера по производственно-техническому обеспечению и качеству",
        "заместитель главного инженера по радиационной защите",
        "заместитель главного инженера по ремонту",
        "заместитель главного инженера по эксплуатации 1-й очереди",
        "заместитель главного инженера по эксплуатации 2-й очереди",
        "заместитель главного инспектора",
        "заместитель директора  по управлению персоналом",
        "заместитель директора по капитальному  строительству-начальник УКС",
        "заместитель директора по общим вопросам",
        "заместитель директора по режиму и физической защите",
        "заместитель директора по экономике и финансам",
        "заместитель начальника",
        "заместитель начальника бюро",
        "заместитель начальника Казначейства",
        "заместитель начальника Казначейства - начальник отдела бюджетного контроля и банковских операций",
        "заместитель начальника Казначейства - начальник отдела классификации расходов и учета договорных обязательств",
        "заместитель начальника КК ХОЯТ (по эксплуатации)",
        "заместитель начальника оперативного отдела",
        "заместитель начальника отдела",
        "заместитель начальника отдела радиационной безопасности",
        "заместитель начальника службы технологического управления",
        "заместитель начальника УКС",
        "заместитель начальника управления - Начальник отдела",
        "заместитель начальника управления - Начальник отдела организации и проведения закупочных процедур",
        "заместитель начальника управления-начальник отдела организации и проведения закупочных процедур по МТР",
        "заместитель начальника управления-начальник отдела организации и проведения закупочных процедур по работам и услугам",
        "заместитель начальника учебно-тренировочного центра",
        "заместитель начальника цеха (по ремонту)",
        "заместитель начальника цеха",
        "заместитель начальника цеха (по эксплуатации)",
        "заместитель руководителя - начальник отдела",
        "заместитель руководителя центра",
        "зарядчик огнетушителей",
        "инженер",
        "инженер (по эксплуатации) (сменный)",
        "инженер (по ремонту)",
        "инженер (по эксплуатации)",
        "инженер (по эксплуатации) (сменный)",
        "инженер (ППР)",
        "инженер (сменный)",
        "инженер по метрологии",
        "инженер по организации и нормированию труда",
        "инженер по организации труда",
        "инженер по охране окружающей среды",
        "инженер по охране труда",
        "инженер по ремонту",
        "инженер по стандартизации",
        "инженер по эксплуатации и ремонту гидротехнических сооружений",
        "инженер по эксплуатации теплотехнического оборудования",
        "инженер(по переключениям) (сменный)",
        "инженер-конструктор",
        "инженер-лаборант",
        "инженер-лаборант (химик-микробиолог)",
        "инженер-микробиолог",
        "инженер-программист",
        "инженер-технолог",
        "инженер-химик",
        "инженер-электроник",
        "инспектор",
        "инспектор (по электробезопасности)",
        "инструктор",
        "инструктор по лечебной физкультуре",
        "инструктор-методист",
        "капитан (АСКРО)",
        "капитан службы флота",
        "кладовщик",
        "контролер сварочных работ",
        "лаборант по физико-механическим испытаниям",
        "лаборант химико-бактериологического анализа",
        "лаборант химического анализа",
        "лаборант-микробиолог",
        "лаборант-радиометрист",
        "мастер производственного участка",
        "мастер участка",
        "машинист двигателей внутреннего сгорания",
        "машинист крана (крановщик)",
        "машинист насосных установок",
        "машинист-обходчик по турбинному оборудованию",
        "медицинская сестра",
        "медицинская сестра (по диетпитанию)",
        "медицинская сестра (по массажу)",
        "диспетчер",
        "дозиметрист",
        "документовед",
        "начальник",
        "начальник бюро",
        "начальник группы",
        "начальник железнодорожного участка",
        "начальник казначейства",
        "начальник лаборатории",
        "начальник лаборатории ядерной безопасности 1-й очереди",
        "начальник лаборатории ядерной безопасности 2-й очереди",
        "начальник отдела",
        "начальник отдела инспекций",
        "начальник отдела радиационной безопасности",
        "начальник отдела ядерной безопасности и надёжности",
        "начальник отделения",
        "начальник отделения лечебной физкультуры (заведующий отделением)",
        "начальник производственного участка",
        "начальник службы",
        "начальник службы безопасности",
        "начальник службы по управлению персоналом",
        "начальник службы технологического управления",
        "начальник смены",
        "начальник смены атомной станции",
        "начальник смены блока атомной станции",
        "начальник смены цеха",
        "начальник тепломеханического участка",
        "начальник управления закупок",
        "начальник управления капитального строительства",
        "начальник участка",
        "начальник учебного пункта",
        "начальник цеха",
        "опеpатоp котельной",
        "оператор на решетке",
        "оператор на фильтрах",
        "оператор производственного водоснабжения, вентиляционных и газовых систем",
        "оператор реакторного отделения",
        "оператор систем радиационного и дозиметрического контроля",
        "оператор спецводоочистки",
        "оператор транспортно-технологического оборудования реакторного отделения",
        "оператор установок по обезвоживанию осадка",
        "оператор хлораторной установки",
        "ответственный дежурный инженер",
        "первый заместитель главного инженера по эксплуатации",
        "переводчик",
        "переработчик радиоактивных отходов",
        "помощник директора",
        "помощник директора по сооружению новых блоков-начальник отдела по специальной безопасности",
        "помощник капитана",
        "помощник начальника цеха",
        "помощник юрисконсульта",
        "психолог",
        "руководитель группы",
        "руководитель группы (коммерческого диспетчирования)",
        "руководитель секретариата",
        "руководитель управления",
        "руководитель центра закупок",
        "руководитель центра общественной информации",
        "секретарь руководителя",
        "слесарь аварийно-восстановительных работ",
        "слесарь по обслуживанию оборудования электростанций",
        "слесарь по обслуживанию тепловых сетей",
        "слесарь по ремонту подвижного состава",
        "слесарь по ремонту реакторно-турбинного оборудования",
        "слесарь-ремонтник",
        "сливщик-разливщик",
        "специалист",
        "специалист по кадрам",
        "старший аудитор - внутренний контролер",
        "старший бухгалтер",
        "старший инспектор",
        "старший инспектор по надзору за подконтрольным оборудованием",
        "старший инспектор по организации работы с персоналом",
        "старший инспектор по эксплуатации",
        "старший инспектор по эксплуатации атомной станции",
        "старший мастер",
        "старший мастер производственного участка",
        "старший мастер участка",
        "старший начальник смены",
        "старший начальник смены цеха",
        "старший оператор реакторного отделения",
        "старший оператор спецводоочистки",
        "старший оператор транспортно-технологического оборудования реакторного отделения",
        "старший товаровед",
        "стропальщик",
        "техник",
        "техник по метрологии",
        "техник(по эксплуатации)",
        "техник(ППР)",
        "техник-программист",
        "техник-технолог",
        "токарь",
        "физиолог",
        "экономист",
        "экономист по финансовой работе",
        "электpослесаpь по pемонту электpических машин",
        "электрогазосварщик",
        "электромонтер диспетчерского оборудования и телеавтоматики",
        "электромонтер по испытаниям и измерениям",
        "электромонтер по обслуживанию электрооборудования",
        "электромонтер по ремонту аппаратуры релейной защиты и автоматики",
        "электромонтер по ремонту и обслуживанию электрооборудования",
        "электрослесарь по ремонту и обслуживанию автоматики и средств измерений электростанций",
        "электрослесарь по ремонту оборудования распределительных устройств",
        "электрослесарь по ремонту электрооборудования электростанций",
        "юрисконсульт"
      ];

      if (value.length > 0) {
        var b = position.filter(hint);
        this.setState({
          hintPosition: b,
          showHintPosition: true
        });
      } else {
        this.setState({
          showHintPosition: false
        });
      }
      if (this.state.hintPosition.length === 0) {
        this.setState({
          showHintPosition: false
        });
      }
    }

<<<<<<< HEAD
    this.setState({
      [name]: value
    });
  }

  //Выбор элемента из списка подсказок подразделений
  handleClickHintSubdivision(event) {
    document.getElementById("subdivision").value = event.target.innerHTML;
    this.setState({
      subdivision: event.target.innerHTML,
      hintSubdivision: [],
      showHintSubdivision: false
    });
  }
  //Выбор элемента из списка подсказок должностей
  handleClickHintPosition(event) {
    document.getElementById("position").value = event.target.innerHTML;
    this.setState({
      position: event.target.innerHTML,
      hintSubdivision: [],
      showHintPosition: false
    });
  }

  //Выбор элемента из списка подсказок подразделений
  handleClickHintSubdivision(event) {
    document.getElementById("subdivision").value = event.target.innerHTML;
    this.setState({
      subdivision: event.target.innerHTML,
      hintSubdivision: [],
      showHintSubdivision: false
    });
  }
  //Выбор элемента из списка подсказок должностей
  handleClickHintPosition(event) {
    document.getElementById("position").value = event.target.innerHTML;
    this.setState({
      position: event.target.innerHTML,
      hintSubdivision: [],
      showHintPosition: false
    });
  }

  //Открывание и закрывание формы UpdateForm
  newStateUpdateForm() {
    this.props.newStateUpdateForm(false);
  }
  //Открытие и закрывания формы TrashModalWindow
  newStateTrashModalWindow() {
    this.props.newStateUpdateForm(false);
    this.props.newStateTrashModalWindow(true);
  }
  //Обработчик button save
  newStateShowUpdateValidation() {
    this.props.showUpdateValidation(true);
    this.props.newStateUpdateForm(false);
    this.props.updateDocument(this.state);
  }

  //Дата срока подготовки обучения
  termOfTraining(date) {
    this.setState({
      termOfTraining: date
    });
  }

  //Дата обучения в УТЦ
  trainingInTheUTC(date) {
    this.setState({
      trainingInTheUTC: date
    });
  }

  //Дата обучения в подразделении
  trainingInTheUnit(date) {
    this.setState({
      trainingInTheUnit: date
    });
  }

  //Дата регистрации программы
  registrationDateOfTheProgram(date) {
    this.setState({
      registrationDateOfTheProgram: date
    });
  }
  //Дата сдачи программы
  dateOfDelivery(date) {
    this.setState({
      dateOfDelivery: date
    });
  }

  render() {
    console.log(this.state);
    var data = this.props.data.updateDocument[
      this.props.data.updateDocument.length - 1
    ];
    return (
      <div className="updateForm">
        <div className="headerWindow">Изменить текущий документ</div>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>№ программы</label>
            <input
              className="form-control"
              type="text"
              name="programmNumber"
              defaultValue={data.programmNumber}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Ф.И.О.</label>
            <input
              className="form-control"
              type="text"
              name="fullName"
              defaultValue={data.fullName}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Предприятие</label>
            <select id="company" className="form-control" name="company">
              <option value="ЛАЭС-1">ЛАЭС-1</option>
              <option value="ЛАЭС-2">ЛАЭС-2</option>
            </select>
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Категория персонала</label>
            <select
              id="personnelCategory"
              className="form-control"
              name="personnelCategory"
            >
              <option value="Оперативный">Оперативный</option>
              <option value="Ремонтный">Ремонтный</option>
              <option value="Административный">Административный</option>
              <option value="Руководители">Руководители</option>
              <option value="Специалисты">Специалисты</option>
              <option value="Рабочие">Рабочие</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>Подразделение</label>
            <input
              className="form-control"
              type="text"
              id="subdivision"
              name="subdivision"
              defaultValue={data.subdivision}
              onChange={this.handleUserInput}
            />
            <div
              className="hintUpdate"
              style={{
                display: this.state.showHintSubdivision ? "block" : "none"
              }}
            >
              <div className="over">
                <ul onClick={this.handleClickHintSubdivision}>
                  {this.state.hintSubdivision.map((tips, index) => (
                    <li className="tips" key={index}>
                      {tips}
                    </li>
                  ))}
                </ul>
=======
   render(){
     var data = this.props.data.updateDocument[this.props.data.updateDocument.length - 1];
      return(
         <div className="updateForm">
            <div className="headerWindow">
               Изменить текущий документ
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-3">
                 <label>№ программы</label>
                 <input className="form-control" type="text" name="programmNumber" defaultValue={data.programmNumber} onChange={this.handleUserInput}/>
              </div>
              <div className="col-xs-6 col-sm-3">
                 <label>Ф.И.О.</label>
                 <input className="form-control" type="text" name="fullName" defaultValue={data.fullName} onChange={this.handleUserInput}/>
              </div>
              <div className="col-xs-6 col-sm-3">
                <label>Предприятие</label>
                 <select id="company" className="form-control" name="company" >
                     <option value="ЛАЭС-1">ЛАЭС-1</option>
                     <option value="ЛАЭС-2">ЛАЭС-2</option>
                 </select>
              </div>
              <div className="col-xs-6 col-sm-3">
                 <label>Категория персонала</label>
                 <select id="personnelCategory" className="form-control" name="personnelCategory" >
                     <option value="Оперативный">Оперативный</option>
                     <option value="Ремонтный">Ремонтный</option>
                     <option value="Административный">Административный</option>
                     <option value="Руководители">Руководители</option>
                     <option value="Специалисты">Специалисты</option>
                     <option value="Рабочие">Рабочие</option>
                 </select>
>>>>>>> bf8b45855b2f573fb807351f2ccb5221d1cbaf51
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Должность</label>
            <input
              className="form-control"
              type="text"
              id="position"
              name="position"
              defaultValue={data.position}
              onChange={this.handleUserInput}
            />
            <div
              className="hintUpdate"
              style={{
                display: this.state.showHintPosition ? "block" : "none"
              }}
            >
              <div className="over">
                <ul onClick={this.handleClickHintPosition}>
                  {this.state.hintPosition.map((tips, index) => (
                    <li className="tips" key={index}>
                      {tips}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Теоретическая подготовка</label>
            <input
              className="form-control"
              type="text"
              name="theoreticalTraining"
              defaultValue={data.theoreticalTraining}
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Практическая подготовка</label>
            <input
              className="form-control"
              type="text"
              name="practicalTraining"
              defaultValue={data.practicalTraining}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>Стажировка</label>
            <input
              className="form-control"
              type="text"
              name="internship"
              defaultValue={data.internship}
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Срок подготовки обучения</label>
            <DatePickerInput
              name="termOfTraining"
              className="my-custom-datepicker-component"
              defaultValue={data.termOfTraining}
              onChange={this.termOfTraining}
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Обучение в УТЦ</label>
            <DatePickerInput
              name="trainingInTheUTC"
              className="my-custom-datepicker-component"
              defaultValue={data.trainingInTheUTC}
              onChange={this.trainingInTheUTC}
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Обучение в подразделении</label>
            <DatePickerInput
              name="trainingInTheUnit"
              className="my-custom-datepicker-component"
              defaultValue={data.trainingInTheUnit}
              onChange={this.trainingInTheUnit}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <label>Дата регистрации программы</label>
            <DatePickerInput
              name="registrationDateOfTheProgram"
              className="my-custom-datepicker-component"
              defaultValue={data.registrationDateOfTheProgram}
              onChange={this.registrationDateOfTheProgram}
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Дата сдачи программы</label>
            <DatePickerInput
              name="dateOfDelivery"
              className="my-custom-datepicker-component"
              defaultValue={data.dateOfDelivery}
              onChange={this.dateOfDelivery}
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Ф.И.О. (Сдающий программу)</label>
            <input
              className="form-control"
              type="text"
              name="fullNameProgram"
              defaultValue={data.fullNameProgram}
            />
          </div>
          <div className="col-xs-6 col-sm-3">
            <label>Ссылка</label>
            <input
              className="form-control"
              type="text"
              name="link"
              defaultValue={data.link}
            />
          </div>
        </div>
        <div className="row">
          <div className="btn-group btn-group-justified">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger btn-lg"
                onClick={this.newStateUpdateForm}
              >
                Закрыть
              </button>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-default btn-lg"
                onClick={this.newStateTrashModalWindow}
              >
                В корзину
              </button>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-success btn-lg"
                onClick={this.newStateShowUpdateValidation}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
<<<<<<< HEAD
  state => ({
    data: state
  }),
  dispatch => ({
    newStateUpdateForm: state => {
      dispatch({ type: "SHOW_UPDATEFORM", payload: state });
    },
    newStateTrashModalWindow: state => {
      dispatch({ type: "SHOW_TRASHMODALWINDOW", payload: state });
    },
    updateDocument: state => {
      dispatch({ type: "UPDATE_DOCUMENT", payload: state });
    },
    showUpdateValidation: state => {
      dispatch({ type: "SHOW_UPDATEVALIDATION", payload: state });
    }
  })
=======
   state => ({
      data: state
   }),
   dispatch => ({
      newStateUpdateForm: (state) => {
         dispatch({ type: 'SHOW_UPDATEFORM', payload: state });
      },
      newStateTrashModalWindow: (state) => {
        dispatch({ type: 'SHOW_TRASHMODALWINDOW', payload: state });
      },
      updateDocument: (state) => {
         dispatch({ type: 'UPDATE_DOCUMENT', payload: state });
      }
   })
>>>>>>> bf8b45855b2f573fb807351f2ccb5221d1cbaf51
)(DocForm);
