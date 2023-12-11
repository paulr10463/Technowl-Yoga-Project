import YogaPostureService from '../scripts/services/yogaPostureService.js';

test('search tadasana name and return postura de la montania', () => {
    const yogaPostureService = new YogaPostureService();
    const tadasanaPosture = yogaPostureService.getPostureByName('tadasana');
    expect(tadasanaPosture.SpanishName).toBe('Postura de la Montaña');
  });

  test('search Vrikshasana name and return tree pose', () => {
    const yogaPostureService = new YogaPostureService();
    const vrikshasanaPosture = yogaPostureService.getPostureByName('vrikshasana');
    expect(vrikshasanaPosture.EnglishName).toBe('Tree Pose');
  });

  test('search posture name with spaces at the beginning and end', () => {
    const yogaPostureService = new YogaPostureService();
    const vrikshasanaPosture = yogaPostureService.getPostureByName('     vrikshasana    ');
    expect(vrikshasanaPosture.EnglishName).toBe('Tree Pose');
  });

  test('search posture name with spaces at the middle', () => {
    const yogaPostureService = new YogaPostureService();
    const vrikshasanaPosture = yogaPostureService.getPostureByName('Ardha         Bhujangasana');
    expect(vrikshasanaPosture.EnglishName).toBe('Half Cobra Pose');
  });

  test('search posture name with uppercase letters', () => {
    const yogaPostureService = new YogaPostureService();
    const vrikshasanaPosture = yogaPostureService.getPostureByName('ARDHA BHUJANGASANA');
    expect(vrikshasanaPosture.EnglishName).toBe('Half Cobra Pose');
  });
  