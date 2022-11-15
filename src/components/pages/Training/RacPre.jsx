import React,{useState, useEffect} from 'react';
import {Container,Button,Row, Alert, Spinner} from 'react-bootstrap';
import {RACFilter} from "../../utils/FilterCard";
import DisplayChart from '../../chart/DisplayChart';
import { Modal } from 'react-bootstrap';
import PageTopSection from '../../utils/PageTopSection';
import axios from 'axios';
import FormData from 'form-data';
import FilteredData from '../../utils/FilteredData';
import RACQuestions from '../../utils/RACQuestions';


const DheeraMaster = () => {
  const [show, setShow] = useState(false)
  const [csvfilename, setCSVfileName] = useState("rac_registration_pre");
  const [file, setFile] = useState(null)
  const [totalReg, setTotalReg]= useState(0);
  const [savedTotal, setSavedTotal] = useState(0);
  const [showFiltered, setShowFiltered] = useState(false);

  const [filterReg, setFilterReg]= useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  const [downloadCSVArray, setDownloadCSVArray] = useState([])

  const [message, setMessage] = useState(null)

  const [loading, setLoading] = useState(true)
  const [uploadLoading, setUploadLoading] = useState(false)

  const [loaded, setLoaded] = useState('0');

      
  const [success, setSuccess] = useState(false)
  const [uploadERR, setUploadErr] = useState(null);
  const [uploadERRMSG, setUploadErrMSG] = useState(null)

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
    q13 : "Q.13",
    q14 : "Q.14",
    q15 : "Q.15",
  }

  const initialData = [
    { "label": "Q.15", y: 0 },
    { "label": "Q.14", y: 0 },
    { "label": "Q.13", y: 0 },
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

  const [data1, setData1] = useState(initialData)

  const [data2, setData2] = useState(initialData)

  const [data3, setData3] = useState(initialData)

  const [dataPost1, setDataPost1] = useState(initialData)

  const [dataPost2, setDataPost2] = useState(initialData)

  const [dataPost3, setDataPost3] = useState(initialData)

  const [feedback1, setFeedback1] = useState(initialData)

  const [feedback2, setFeedback2] = useState(initialData)

  const [feedback3, setFeedback3] = useState(initialData)

  const [feedback4, setFeedback4] = useState(initialData)

  const [feedback5, setFeedback5] = useState(initialData)


  const [dataForChart1, setChart1] = useState([
    {
      type: "stackedBar",
			name: "True",
      yValueFormatString: "0.0 '%'",
			dataPoints: data1
    },
    {
      type: "stackedBar",
			name: "False",
      yValueFormatString: "0.0 '%'",
			dataPoints: data2
    },
    {
      type: "stackedBar",
			name: "I don't Know",
      yValueFormatString: "0.0 '%'",
			dataPoints: data3
    }
  ])

  const [dataForChart2, setChart2] = useState([
    {
      type: "stackedBar",
			name: "True",
      yValueFormatString: "0.0 '%'",
			dataPoints: dataPost1
    },
    {
      type: "stackedBar",
			name: "False",
      yValueFormatString: "0.0 '%'",
			dataPoints: dataPost2
    },
    {
      type: "stackedBar",
			name: "I don't know",
      yValueFormatString: "0.0 '%'",
			dataPoints: dataPost3
    }
  ])

  const [dataForFeedback, setFeedbackChart] = useState([
    {
      type: "stackedBar",
			name: "Strongly Disagree",
      yValueFormatString: "0.0 '%'",
			dataPoints: feedback1
    },
    {
      type: "stackedBar",
			name: "Disagree",
      yValueFormatString: "0.0 '%'",
			dataPoints: feedback2
    },
    {
      type: "stackedBar",
			name: "Neutral",
      yValueFormatString: "0.0 '%'",
			dataPoints: feedback3
    },
    {
      type: "stackedBar",
			name: "Agree",
      yValueFormatString: "0.0 '%'",
			dataPoints: feedback4
    },
    {
      type: "stackedBar",
			name: "Fully Agree",
      yValueFormatString: "0.0 '%'",
			dataPoints: feedback5
    }
  ])
  

  function handleFilter(options){

    setLoading(true)
    if(options.age === ""){
      options.age = ".*"
    }
    if(options.state === "" || options.state === "All India"){
      options.state = ".*"
    }

    if(options.area_of_employment === ""){
      options.area_of_employment = ".*"
    }
    if(options.gender === ""){
      options.gender = ".*"
    }
    if(options.type_of_Institution_where_you_are_currently_working === ""){
      options.type_of_Institution_where_you_are_currently_working = ".*"
    }

    for (const key in options) {
      let str = options[key]
      let regex = / /g;
      let slash = /\//g 
      let result = str.replace(regex, "\u00a0");
      result = result.replace(slash, '%2F')
      options[key] = result
    }
    
    let url = `https://dheeratest8.azurewebsites.net/api/v1/racPre/filter/${options.age}/${options.state}/${options.area_of_employment}/${options.gender}/${options.type_of_Institution_where_you_are_currently_working}`
    
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
        calculatePercnt(res.data.feedbackData, res.data.preData.length, res.data.post, res.data.postData.length)
      }
    })
    .catch(err => {
      setLoading(false)
    })
  }


  function calculatePercnt(feedbackData, feedbackTotal, post, postCount){

    if(feedbackTotal > 0){
      for (const key in feedbackData) {
        let tper = (feedbackData[key].t / feedbackTotal) * 100
        let fper = (feedbackData[key].f / feedbackTotal) * 100
        let dper = (feedbackData[key].d / feedbackTotal) * 100
        
        let question = labels[key]
  
        setData1(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: tper}
            }
            return obj;
          })
          return newState
        })
  
        setData2(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: fper}
            }
            return obj;
          })
  
          return newState
        })
  
        setData3(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: dper}
            }
            return obj;
          })
  
          return newState
        })
      }
    }

    if(postCount > 0){
      for (const key in post) {
        let tper = (post[key].t / postCount) * 100
        let fper = (post[key].f / postCount) * 100
        let dper = (post[key].d / postCount) * 100

        let question = labels[key]
  
        setDataPost1(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: tper}
            }
            return obj;
          })
          return newState
        })
  
        setDataPost2(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: fper}
            }
            return obj;
          })
  
          return newState
        })
  
        setDataPost3(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: dper}
            }
            return obj;
          })
  
          return newState
        })
  
      }
    }

  }

  function changeData() {
    setChart1(prevState => {
      const newState = prevState.map(obj => {
        if(obj.name === "True"){
          return {...obj, dataPoints : data1}
        }
        if(obj.name === "False"){
          return {...obj, dataPoints : data2}
        }
        if(obj.name === "I don't Know"){
          return {...obj, dataPoints : data3}
        }
        return obj;
      })
      return newState
    })

    setChart2(prevState => {
      const newState = prevState.map(obj => {
        console.log(obj)
        if(obj.name === "True"){
          return {...obj, dataPoints : dataPost1}
        }
        if(obj.name === "False"){
          return {...obj, dataPoints : dataPost2}
        }
        if(obj.name === "I don't know"){
          return {...obj, dataPoints : dataPost3}
        }
        return obj;
      })
      return newState
    })
  }

  useEffect(() => {
    changeData()
  }, [data1, data2, data3])
  

  useEffect(() => {
    setLoading(true)
    Promise.all([
      axios.get('https://dheeratest8.azurewebsites.net/api/v1/racpre/questions'),
    ]).then((responses) => {
      return Promise.all(responses.map(response => {
        return response.data
      }))
    }).then(data => {
      setTotalReg(data[0].preCount);
      setSavedTotal(data[0].preCount);
      setInitialLoad(false)
      setLoading(false)
      if(data[0].preCount === 0 && data[0].postCount === 0){
        setMessage("No Records Available")
      }else{
        calculatePercnt(data[0].pre, data[0].preCount, data[0].post, data[0].postCount)
      }
    }).catch(err => {
      setMessage(err.message)
      setInitialLoad(false)
      setLoading(false)
      console.log(err)
    })

  }, [])

  function prepareChartForFeedback(feedbackData, feedbackTotal){

    if(feedbackTotal > 0){
      for (const key in feedbackData) {
        let SDper = (feedbackData[key].sd / feedbackTotal) * 100
        let Dper = (feedbackData[key].d / feedbackTotal) * 100
        let Nper = (feedbackData[key].n / feedbackTotal) * 100
        let Aper = (feedbackData[key].a / feedbackTotal) * 100
        let FAper = (feedbackData[key].fa / feedbackTotal) * 100
        
        let question = labels[key]
  
        setFeedback1(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: SDper}
            }
            return obj;
          })
  
          return newState
        })
  
        setFeedback2(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: Dper}
            }
            return obj;
          })
  
          return newState
        })
  
        setFeedback3(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: Nper}
            }
            return obj;
          })
  
          return newState
        })

        setFeedback4(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: Aper}
            }
            return obj;
          })
  
          return newState
        })

        setFeedback5(prevState => {
          const newState = prevState.map(obj => {
            if(obj.label === question){
              return {...obj, y: FAper}
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
        if(obj.name === "Strongly Disagree"){
          return {...obj, dataPoints : feedback1}
        }
        if(obj.name === "Disagree"){
          return {...obj, dataPoints : feedback2}
        }
        if(obj.name === "Neutral"){
          return {...obj, dataPoints : feedback3}
        }
        if(obj.name === "Agree"){
          return {...obj, dataPoints : feedback4}
        }
        if(obj.name === "Fully Agree"){
          return {...obj, dataPoints : feedback5}
        }
        return obj;
      })
      return newState
    })
  }

  useEffect(() => {
    setLoading(true)
    Promise.all([
      axios.get('https://dheeratest8.azurewebsites.net/api/v1/racPost/feedback'),
    ]).then((responses) => {
      return Promise.all(responses.map(response => {
        return response.data
      }))
    }).then(data => {
      setLoading(false)
      if(data[0].postCount === 0){
        setMessage("No Records Available")
      }else{
        prepareChartForFeedback(data[0].post, data[0].postCount)
      }
    }).catch(err => {
      setMessage(err.message)
      setLoading(false)
      console.log(err)
    })
  }, [])


  useEffect(() => {
    
    changeFeedbackData()

  }, [feedback1, feedback2, feedback3, feedback4, feedback5])
  

  return (
    <Container>

      <PageTopSection 
      pageTitle="RAC Training Analytics"
      options={
        [
          {
            value : "rac_registration_pre", 
            name: "RAC Training Registration Pre"
          },
          {
            value : "rac_registration_post", 
            name: "RAC Training Test Feedback"
          }
        ]
      }
      dateFilterUrl="https://dheeratest8.azurewebsites.net/api/v1/racpre/questions"
      uploadUrl="https://dheeratest8.azurewebsites.net/api/v1/racpre/"
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

    <RACFilter  handleFilter={handleFilter}/> 
    {
      showFiltered && !message ? <FilteredData totalReg={filterReg} fileName={csvfilename} data={downloadCSVArray} /> : null
    }

    {
      loading ? 
      <div className='loader-container'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> 
      </div>
      : message ? <div className='loader-container'>
        <h3 className='error'>{message}</h3>
      </div> :  
      <Row>
      {
        loading ? 
        <div className='loader-container'>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner> 
        </div>
        : message ? <div className='loader-container'>
          <h3 className='warning'>{message}</h3>
        </div> : csvfilename === "rac_registration_post" ? <DisplayChart 
              dataForChart={dataForFeedback}
              title="Post Test Analysis"
            /> :
            <>
            <div className='col-md-6'>
              <DisplayChart 
                dataForChart={dataForChart1}
                title="Pre Test Analysis"
              />
            </div>
            <div className='col-md-6'>
            <DisplayChart 
              dataForChart={dataForChart2}
              title="Post Test Analysis"
            /> 
            </div>
            </>
      }   
      </Row>
    }
    <RACQuestions />

 {/* confirmation window before file upload   */}

 <Modal show={show} 
    onHide={() => setShow(false)}>
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
            let url = "https://dheeratest8.azurewebsites.net/api/v1/racPre"
            if(csvfilename === "rac_registration_post"){
              url = "https://dheeratest8.azurewebsites.net/api/v1/racPost"
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

