import YogaPostureService from '../scripts/services/yogaPostureService.js';
import YogaPosturesView from '../scripts/views/yogaPostureView.js';
import YogaPostureView from '../scripts/views/yogaPostureView.js';

test('search tadasana name and return postura de la montania', () => {
    const yogaPostureService = new YogaPostureService();
    const tadasanaPosture = yogaPostureService.getPostureByName('tadasana');
    expect(tadasanaPosture.getSpanishName()).toBe('Postura de la Montaña');
  });

  test('search Vrikshasana name and return tree pose', () => {
    const yogaPostureService = new YogaPostureService();
    const vrikshasanaPosture = yogaPostureService.getPostureByName('vrikshasana');
    expect(vrikshasanaPosture.getEnglishName()).toBe('Tree Pose');
  });

  test('search posture name with spaces at the beginning and end', () => {
    const yogaPostureService = new YogaPostureService();
    const vrikshasanaPosture = yogaPostureService.getPostureByName('     vrikshasana    ');
    expect(vrikshasanaPosture.getEnglishName()).toBe('Tree Pose');
  });

  test('search posture name with spaces at the middle', () => {
    const yogaPostureService = new YogaPostureService();
    const asanaPosture = yogaPostureService.getPostureByName('Ardha         Bhujangasana');
    expect(asanaPosture.getEnglishName()).toBe('Half Cobra Pose');
  });

  test('search posture name with uppercase letters', () => {
    const yogaPostureService = new YogaPostureService();
    const asanaPosture = yogaPostureService.getPostureByName('ARDHA BHUJANGASANA');
    expect(asanaPosture.getEnglishName()).toBe('Half Cobra Pose');
  });

  test('search posture name with uppercase and Lowercase letters', () => {
    const yogaPostureService = new YogaPostureService();
    const asanaPosture = yogaPostureService.getPostureByName('ARdHa BhUJAngAsaNA');
    expect(asanaPosture.getEnglishName()).toBe('Half Cobra Pose');
  });

  test('search posture name with special characters', () => {
    const yogaPostureService = new YogaPostureService();
    const asanaPosture = yogaPostureService.getPostureByName('ARdHa BhUJAngAsaNA.');
    expect(asanaPosture).toBe(null);
  });

  test('blank search', () => {
    const yogaPostureService = new YogaPostureService();
    const asanaPosture = yogaPostureService.getPostureByName('');
    expect(asanaPosture).toBe(null);
  });
  
  test('recomendations with missing letter on search', () => {
    const yogaPostureService = new YogaPostureService();
    const asanaPosture = yogaPostureService.getPosturesBySimilarNames('Adho Mukha Svanaana', 2);
    expect(asanaPosture[0]).toBe('Adho Mukha Svanasana');
  });

  test('recomendations with blank space beetween on search', () => {
    const yogaPostureService = new YogaPostureService();
    const asanaPosture = yogaPostureService.getPosturesBySimilarNames('Adho Muk ha Svanasana', 2);
    expect(asanaPosture[0]).toBe('Adho Mukha Svanasana');
  });

  test('recomendations with special characeter on search', () => {
    const yogaPostureService = new YogaPostureService();
    const asanaPosture = yogaPostureService.getPosturesBySimilarNames('Adho Mukh@ Svanasana', 2);
    expect(asanaPosture[0]).toBe('Adho Mukha Svanasana');
  });
  
  test('recomendations with disordered characters on search', () => {
    const yogaPostureService = new YogaPostureService();
    const asanaPosture = yogaPostureService.getPosturesBySimilarNames('Urdhva Mukha aSvanasan', 2);
    expect(asanaPosture[0]).toBe('Urdhva Mukha Svanasana');
  });

  test('time performance of getPosturesBySimilarNames should take less than 100ms', () => {
    const yogaPostureService = new YogaPostureService();
    const start = Date.now();
    yogaPostureService.getPosturesBySimilarNames('Adho Mukha Svanasana');
    const end = Date.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });

  test('time performance of getPostureByName should take less than 100ms', () => {
    const yogaPostureService = new YogaPostureService();
    const start = Date.now();
    const posture = yogaPostureService.getPostureByName('Adho Mukha Svanasana');
    const end = Date.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
  
  describe('YogaPosturesView', () => {
    let view;
  
    beforeEach(() => {
      // Set up our document body
      document.body.innerHTML = `
        <div id="PoseOverlay"></div>
        <button id="closePoseOverlay"></button>
        <button id="showPoseOverlay"></button>
        <input id="postureNameInput" />
        <button id="submitButton" />
        <div id="morphemesTable"></div>
        <div id="EnglishTranslationResult"></div>
        <div id="SpanishTranslationResult"></div>
        <div id="SanskritTranslationResult"></div>
        <img id="PosturePicture" />
        <div id="PostureVideo"></div>
        <input id="poseInputSanscrito" />
        <input id="poseInputIngles" />
        <input id="poseInputEspanol" />
        <input id="poseInputImagen" type="file" />
        <input id="poseInputVideo" />
        <button id="submitPoseButton"></button>
      `;
      view = new YogaPosturesView();
    });
  
    test('should initialize DOM elements correctly', () => {
      expect(view._yogaPostureInput).not.toBeNull();
      expect(view._submitButton).not.toBeNull();
    });
  
    test('should attach event listener to closePoseOverlay button', () => {
      document.getElementById('closePoseOverlay').click();
      expect(document.getElementById('PoseOverlay').classList.contains('show')).toBeFalsy();
    });
  });

  describe('getPostureByName', () => {
    const yogaPostureService = new YogaPostureService();
  
    test('returns correct posture for a given name', () => {
      const postureName = 'Tadasana'; 
      const expectedEnglishName = 'Mountain Pose';
      const posture = yogaPostureService.getPostureByName(postureName);
      expect(posture).not.toBeNull();
      expect(posture.getEnglishName()).toBe(expectedEnglishName);
    });
  });

 

  describe('getPosturesBySimilarNames', () => {
    const yogaPostureService = new YogaPostureService();
  
    test('returns similar posture names within a threshold', () => {
      const similarNames = yogaPostureService.getPosturesBySimilarNames('Tadasna', 2);
      expect(similarNames.includes('Tadasana')).toBeTruthy();
    });
  });
  describe('_getPosesFromLocalStorage', () => {
    const yogaPostureService = new YogaPostureService();
  
    test('retrieves poses from local storage', () => {
      const mockPoses = [{ english: 'Mock Pose', sanskrit: '', spanish: '', image: null, url: '' }];
      localStorage.setItem('posesList', JSON.stringify(mockPoses));
  
      const poses = yogaPostureService._getPosesFromLocalStorage(); 
      expect(poses.length).toBe(1);
      expect(poses[0].english).toBe('Mock Pose');
    });
  });