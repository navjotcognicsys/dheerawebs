import React,{useState, useEffect} from 'react';
import {Container,Form,Button,Row,Col, Spinner, Alert, Modal}from 'react-bootstrap';
import Question from '../../utils/Question';
import {MasterFilter} from "../../utils/FilterCard";
import DisplayChart from '../../chart/DisplayChart';
import FilteredData from '../../utils/FilteredData';
import PageTopSection from '../../utils/PageTopSection';
import axios from 'axios';


const DheeraMaster = () => {
  const [csvfilename, setCSVfileName] = useState("dheera_master_training_registration_pre");
  const [show, setShow] = useState(false)
  const [totalReg, setTotalReg]= useState(0);
  const [filterReg, setFilterReg]= useState(0);
  const [savedTotal, setSavedTotal] = useState(0);
  const [file, setFile] = useState(null)
  const [downloadCSVArray, setDownloadCSVArray] = useState([])

  const [showFiltered, setShowFiltered] = useState(false);

  const [message, setMessage] = useState(null)
  const [feedbackMSG, setFeedbackMSG] = useState(null)

  const [loading, setLoading] = useState(true)
  const [feedbackLoading, setFeedbackLoading] = useState(true)
  const [initialLoad, setInitialLoad] = useState(true);

  const [loaded, setLoaded] = useState('0');

  const [success, setSuccess] = useState(false)
  const [uploadERR, setUploadErr] = useState(null);
  const [uploadERRMSG, setUploadErrMSG] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false)

  var labels = {
    q1 :  "Q.1",
    q2 : "Q.2",
    q3 : "Q.3",
    q4 : "Q.4",
    q5 : "Q.5",
    q6 : "Q.6",
    q7 : "Q.7",
    q8 : "Q.8",
    q9 : "Q.9",
    q10 : "Q.10",
    q11 : "Q.11",
    q12 : "Q.12",
  }


  const initialData = [
    { "label": "Q.12", y: 0 },
    { "label": "Q.11", y: 0 },
    { "label": "Q.10", y: 0 },
    { "label": "Q.9", y: 0 },
    { "label": "Q.8", y: 0 },
    { "label": "Q.7", y: 0 },
    { "label": "Q.6", y: 0 },
    { "label": "Q.5", y: 0 },
    { "label": "Q.4", y: 0 },
    { "label": "Q.3", y: 0 },
    { "label": "Q.2", y: 0 },
    { "label": "Q.1", y: 0 }
  ]

  const initialDataFeedback = [
    { "label": "Q.9", y: 0 },
    { "label": "Q.8", y: 0 },
    { "label": "Q.7", y: 0 },
    { "label": "Q.6", y: 0 },
    { "label": "Q.5", y: 0 },
    { "label": "Q.4", y: 0 },
    { "label": "Q.3", y: 0 },
    { "label": "Q.2", y: 0 },
    { "label": "Q.1", y: 0 }
  ]

  const [data1, setData1] = useState(initialData)

  const [data2, setData2] = useState(initialData)

  const [feedback1, setFeedback1] = useState(initialDataFeedback)

  const [feedback2, setFeedback2] = useState(initialDataFeedback)

  const [feedback3, setFeedback3] = useState(initialDataFeedback)

  const [feedback4, setFeedback4] = useState(initialDataFeedback)

  const [feedback5, setFeedback5] = useState(initialDataFeedback)

  const [dataForChart, setDataForChart] = useState([
    {
      type: "stackedBar",
			name: "Pre Test",
      yValueFormatString: "##.## '%'",
			dataPoints: data1
    },
    {
      type: "stackedBar",
			name: "Post Test",
      yValueFormatString: "##.## '%'",
			dataPoints: data2
    }
  ])
  

  const [dataForFeedback, setFeedbackChart] = useState([
    {
      type: "stackedBar",
			name: "Strongly agree",
      yValueFormatString: "0.0 '%'",
			dataPoints: feedback1
    },
    {
      type: "stackedBar",
			name: "Agree",
      yValueFormatString: "0.0 '%'",
			dataPoints: feedback2
    },
    {
      type: "stackedBar",
			name: "Disagree",
      yValueFormatString: "0.0 '%'",
			dataPoints: feedback3
    },
    {
      type: "stackedBar",
			name: "Strongly disagree",
      yValueFormatString: "0.0 '%'",
			dataPoints: feedback4
    },
    {
      type: "stackedBar",
			name: "No opinion",
      yValueFormatString: "0.0 '%'",
			dataPoints: feedback5
    }
  ])


  function handleFilter(options){
    setLoading(true)
    if(options.state === "" || options.state === "All India"){
      options.state = ".*"
    }
    if(options.are_you_Master_Trainer_or_Trainee === ""){
      options.are_you_Master_Trainer_or_Trainee = ".*"
    }

    for (const key in options) {
      let str = options[key]
      let regex = / /g;
      let result = str.replace(regex, "\u00a0");
      options[key] = result
    }
    
    let url = `https://dheeratest8.azurewebsites.net/api/v1/dheeraMasterTrainingPre/filter/${options.state}/${options.are_you_Master_Trainer_or_Trainee}/`
    axios.get(url)
    .then(res => {
      setLoading(false)
      if(res.data.preData.length === 0){
        setMessage("No records for selected filters")
        setShowFiltered(false)
      }else{
        setDownloadCSVArray(res.data.preData)
        setMessage(null);
        setShowFiltered(true);
        setFilterReg(res.data.preData.length);
        calculatePercnt(res.data.pre, res.data.preData.length, res.data.post, res.data.postData.length)
      }
    })
    .catch(err => {
      setLoading(false)
    })

  }

  function calculatePercnt(data1, total, data2, total2) {

    if(total > 0){
      for(const key in data1) {
        let per = (data1[key] / total) * 100
        let roundof = Math.round(per * 100) / 100
        let question = labels[key]

        setData1(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: roundof}
            }
            return obj;
          })
  
          return newState
  
        })
      }
    }else{
      setData1(initialData)
    }

    if(total2 > 0){
      for(const key in data2) {
        let per = (data2[key] / total2) * 100
        let roundof = Math.round(per * 100) / 100
        let question = labels[key]
  
        setData2(prevState => {
          const newState = prevState.map(obj => {
            
            if(obj.label === question){
              return {...obj, y: roundof}
            }
            return obj;
          })
          return newState
        })
      }
    }else{
      setData2(initialData)
    }
	}

  useEffect(() => {
    changeData()
  }, [data1, data2])
  

  function changeData() {
    setDataForChart(prevState => {
      const news = prevState.map(obj => {
        if(obj.name === "Pre Test"){
          return {...obj, dataPoints : data1}
        }
        if(obj.name === "Post Test"){
          return {...obj, dataPoints : data2}
        }
        return obj;
      })
      return news
    })
  }

  useEffect(() => {
    setLoading(true)
    setMessage(null)
    Promise.all([
      axios.get('https://dheeratest8.azurewebsites.net/api/v1/dheeraMasterTrainingPre/questions'),
    ]).then((responses) => {
      return Promise.all(responses.map(response => {
        return response.data
      }))
    }).then(data => {
      setTotalReg(data[0].preCount);
      setSavedTotal(data[0].preCount);
      setInitialLoad(false);
      setLoading(false);
      if(data[0].preCount === 0 && data[0].postCount === 0){
        setMessage("No Records Available");
      }else{
        calculatePercnt(data[0].pre, data[0].preCount, data[0].post, data[0].postCount);
      }
    }).catch(err => {
      setMessage(err.message)
      setInitialLoad(false)
      setLoading(false)
    })
  }, [])


  function prepareChartForFeedback(feedbackData, feedbackTotal){

    if(feedbackTotal > 0){
      for (const key in feedbackData) {
        let SAper = (feedbackData[key].sa / feedbackTotal) * 100
        let Aper = (feedbackData[key].a / feedbackTotal) * 100
        let Dper = (feedbackData[key].d / feedbackTotal) * 100
        let SDper = (feedbackData[key].sd / feedbackTotal) * 100
        let NOper = (feedbackData[key].no / feedbackTotal) * 100
        

        let question = labels[key]
  
        setFeedback1(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: SAper}
            }
            return obj;
          })
  
          return newState
        })
  
        setFeedback2(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: Aper}
            }
            return obj;
          })
  
          return newState
        })
  
        setFeedback3(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: Dper}
            }
            return obj;
          })
  
          return newState
        })

        setFeedback4(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: SDper}
            }
            return obj;
          })
  
          return newState
        })

        setFeedback5(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: NOper}
            }
            return obj;
          })
  
          return newState
        })
      }
    }
  }

  function changeFeedbackData(){
    setFeedbackChart(prevState => {
      const newState = prevState.map(obj => {
        if(obj.name === "Strongly agree"){
          return {...obj, dataPoints : feedback1}
        }
        if(obj.name === "Agree"){
          return {...obj, dataPoints : feedback2}
        }
        if(obj.name === "Disagree"){
          return {...obj, dataPoints : feedback3}
        }
        if(obj.name === "Strongly disagree"){
          return {...obj, dataPoints : feedback4}
        }
        if(obj.name === "No opinion"){
          return {...obj, dataPoints : feedback5}
        }
        return obj;
      })
      return newState
    })
  }

  useEffect(() => {
    setFeedbackLoading(true)
    Promise.all([
      axios.get('https://dheeratest8.azurewebsites.net/api/v1/dheeraMasterTrainingPost/feedback'),
    ]).then((responses) => {
      return Promise.all(responses.map(response => {
        return response.data
      }))
    }).then(data => {
      setFeedbackLoading(false)
      if(data[0].postCount === 0){
        setFeedbackMSG("No Records Available")
      }else{
        prepareChartForFeedback(data[0].post, data[0].postCount)
      }
    }).catch(err => {
      setFeedbackMSG(err.message)
      setFeedbackLoading(false)
    })
  }, [])


  useEffect(() => {
    changeFeedbackData()
  }, [feedback1, feedback2, feedback3, feedback4, feedback5])
  

  return (
    <Container>
    <PageTopSection 
      pageTitle="Dheera Master Training Analytics"
      options={
        [
          {
            value : "dheera_master_training_registration_pre", 
            name: "Dheera Master Registration Pre"
          },
          {
            value : "dheera_master_post_test_feedback", 
            name: "Dheera Master Post Test Feedback"
          }
        ]
      }
      dateFilterUrl="https://dheeratest8.azurewebsites.net/api/v1/dheeraMasterTrainingPre/dateFilter"
      uploadUrl="https://dheeratest8.azurewebsites.net/api/v1/dheeraMasterTrainingPre/"
      setShow={setShow}
      csvfilename={csvfilename}
      file={file}
      setFile={setFile}
      initialLoad={initialLoad}
      savedTotal={savedTotal}
      totalReg={totalReg}
      setTotalReg={setTotalReg}
      selectCSVNameToUpload={setCSVfileName}
    />
    
    <div className='subtitle-container'>
    <p className='chartsubtitle filter'>Filter</p>
    { 
      csvfilename === "dheera_master_post_test_feedback" ?
      <p className='chartsubtitle'>Post Feedback Data</p> : 
      <p className='chartsubtitle'>Pre Test and Post Test Data</p>  
    }
    </div>

    <MasterFilter  
      handleFilter={handleFilter}
    />
     
    {
      showFiltered && !message ? <FilteredData totalReg={filterReg} fileName={csvfilename} data={downloadCSVArray} /> : null
    }



    {
      csvfilename === "dheera_master_training_registration_pre" && loading ? <div className='loader-container'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> 
      </div> : !loading && message && csvfilename === "dheera_master_training_registration_pre"?  
        <div className='loader-container'>
          <h3 className='error'>{message}</h3>
        </div> 
          : csvfilename === "dheera_master_training_registration_pre" ? <DisplayChart 
            dataForChart={dataForChart}
            title="Pre and Post Training Analysis"
          /> : null
    }
    
    {
      csvfilename === "dheera_master_post_test_feedback" && feedbackLoading ? 
      <div className='loader-container'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> 
      </div>  :  
      !feedbackLoading && feedbackMSG  && csvfilename === "dheera_master_post_test_feedback"? 
      <div className='loader-container'>
        <h3 className='error'>{feedbackMSG}</h3>
      </div> : csvfilename === "dheera_master_post_test_feedback" ? 
      <DisplayChart 
        dataForChart={dataForFeedback}
        title="Post Test Feedback Analysis"
      /> : null
      
    }

    <Question />

     <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Confirm</Modal.Title>
    </Modal.Header>

    {
      !uploadLoading && !uploadERR ? null : uploadLoading && !uploadERR ? <div className='loader-container'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> 
      </div> : uploadERR ? <Alert variant='danger'>{
         uploadERR.response.data.message
      }</Alert> : <Alert variant='success'>{success}</Alert>
    }

    {

      success ? <Alert variant='success'>{success}</Alert> : null

    }
    
      <Modal.Body>
        <p style={{color: 'black', fontWeight: 'bold'}}>{file?.name}</p>
        <p> will upload as </p>
        <p style={{color: 'green', fontWeight: 'bold'}}>{csvfilename}</p>
      </Modal.Body>
    
    <Modal.Footer>
        {
          uploadERR || success ? null : <Button variant="primary" onClick={() => {
            setUploadLoading(true)
            const data = new FormData()
            data.append(csvfilename, file)
            let url = "https://dheeratest8.azurewebsites.net/api/v1/dheeraMasterTrainingPre"
            if(csvfilename === "dheera_master_post_test_feedback"){
              url = "https://dheeratest8.azurewebsites.net/api/v1/dheeraMasterTrainingPost"
            }

            axios.post(url, data, {
                  onUploadProgress: ProgressEvent => {
                    setLoaded((ProgressEvent.loaded / ProgressEvent.total*100))
              },
            }).then(res => {
              setSuccess("Successfully Uploaded!")
              setUploadErrMSG("Successfully Uploaded!")
              setUploadLoading(false)
            }).catch(err => {
              console.log(err)
              setUploadErr(err)
              setUploadErrMSG("Some Error!")
              setUploadLoading(false)
            })
            }}>
              Yes
            </Button>
            }
            <Button variant="secondary" onClick={() => {
              setShow(false);
              setUploadErrMSG(null)
              setUploadErr(null)
              setSuccess(false);
              }}>
              { uploadERR || success ? <>Close</> : <>No</> }
            </Button>
      </Modal.Footer>
    </Modal>

    </Container>
  )
}

export default DheeraMaster