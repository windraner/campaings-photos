import { updateMarkerList } from '../utils/index';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CustomCheckbox', () => {
  it('Check checkbox all(off => on)', () => {
    const markersList = [
      {"count": 0, "id": "all", "isChecked": false, "name": "Show all", "type": "all"},
      {"count": 0, "id": "pending", "isChecked": false, "name": "Pending", "type": "main"},
      {"count": 0, "id": "approved", "isChecked": false, "name": "Approved", "type": "main"},
      {"count": 0, "id": "rejected", "isChecked": false, "name": "Rejected", "type": "main"},
      {"count": 0, "id": "rightsRequested", "isChecked": false, "name": "Rights requested", "type": "main"},
      {"count": 0, "id": "sticly", "isChecked": false, "name": "Sticly", "type": "main"},
      {"count": 0, "id": "topPhotos", "isChecked": false, "name": "Top photos", "type": "secondary"},
      {"count": 0, "id": "unhealthy", "isChecked": false, "name": "Unhealthy products", "type": "secondary"}
    ];
    const result = updateMarkerList({markersList, id: 'all'});
    expect(result).toEqual([
      {"count": 0, "id": "all", "isChecked": true, "name": "Show all", "type": "all"},
      {"count": 0, "id": "pending", "isChecked": true, "name": "Pending", "type": "main"},
      {"count": 0, "id": "approved", "isChecked": true, "name": "Approved", "type": "main"},
      {"count": 0, "id": "rejected", "isChecked": true, "name": "Rejected", "type": "main"},
      {"count": 0, "id": "rightsRequested", "isChecked": true, "name": "Rights requested", "type": "main"},
      {"count": 0, "id": "sticly", "isChecked": true, "name": "Sticly", "type": "main"},
      {"count": 0, "id": "topPhotos", "isChecked": false, "name": "Top photos", "type": "secondary"},
      {"count": 0, "id": "unhealthy", "isChecked": false, "name": "Unhealthy products", "type": "secondary"}
    ]);
  });

  it('Check checkbox all(on => off)', () => {
    const markersList = [
      {"count": 0, "id": "all", "isChecked": true, "name": "Show all", "type": "all"},
      {"count": 0, "id": "pending", "isChecked": true, "name": "Pending", "type": "main"},
      {"count": 0, "id": "approved", "isChecked": true, "name": "Approved", "type": "main"},
      {"count": 0, "id": "rejected", "isChecked": true, "name": "Rejected", "type": "main"},
      {"count": 0, "id": "rightsRequested", "isChecked": true, "name": "Rights requested", "type": "main"},
      {"count": 0, "id": "sticly", "isChecked": true, "name": "Sticly", "type": "main"},
      {"count": 0, "id": "topPhotos", "isChecked": false, "name": "Top photos", "type": "secondary"},
      {"count": 0, "id": "unhealthy", "isChecked": false, "name": "Unhealthy products", "type": "secondary"}
    ];
    const result = updateMarkerList({markersList, id: 'all'});
    expect(result).toEqual([
      {"count": 0, "id": "all", "isChecked": false, "name": "Show all", "type": "all"},
      {"count": 0, "id": "pending", "isChecked": false, "name": "Pending", "type": "main"},
      {"count": 0, "id": "approved", "isChecked": false, "name": "Approved", "type": "main"},
      {"count": 0, "id": "rejected", "isChecked": false, "name": "Rejected", "type": "main"},
      {"count": 0, "id": "rightsRequested", "isChecked": false, "name": "Rights requested", "type": "main"},
      {"count": 0, "id": "sticly", "isChecked": false, "name": "Sticly", "type": "main"},
      {"count": 0, "id": "topPhotos", "isChecked": false, "name": "Top photos", "type": "secondary"},
      {"count": 0, "id": "unhealthy", "isChecked": false, "name": "Unhealthy products", "type": "secondary"}
    ]);
  });

  it('Check checkbox from main group(off => on)', () => {
    const markersList = [
      {"count": 0, "id": "all", "isChecked": false, "name": "Show all", "type": "all"},
      {"count": 0, "id": "pending", "isChecked": true, "name": "Pending", "type": "main"},
      {"count": 0, "id": "approved", "isChecked": true, "name": "Approved", "type": "main"},
      {"count": 0, "id": "rejected", "isChecked": true, "name": "Rejected", "type": "main"},
      {"count": 0, "id": "rightsRequested", "isChecked": true, "name": "Rights requested", "type": "main"},
      {"count": 0, "id": "sticly", "isChecked": false, "name": "Sticly", "type": "main"},
      {"count": 0, "id": "topPhotos", "isChecked": false, "name": "Top photos", "type": "secondary"},
      {"count": 0, "id": "unhealthy", "isChecked": false, "name": "Unhealthy products", "type": "secondary"}
    ];
    const result = updateMarkerList({markersList, id: 'sticly'});
    expect(result).toEqual([
      {"count": 0, "id": "all", "isChecked": true, "name": "Show all", "type": "all"},
      {"count": 0, "id": "pending", "isChecked": true, "name": "Pending", "type": "main"},
      {"count": 0, "id": "approved", "isChecked": true, "name": "Approved", "type": "main"},
      {"count": 0, "id": "rejected", "isChecked": true, "name": "Rejected", "type": "main"},
      {"count": 0, "id": "rightsRequested", "isChecked": true, "name": "Rights requested", "type": "main"},
      {"count": 0, "id": "sticly", "isChecked": true, "name": "Sticly", "type": "main"},
      {"count": 0, "id": "topPhotos", "isChecked": false, "name": "Top photos", "type": "secondary"},
      {"count": 0, "id": "unhealthy", "isChecked": false, "name": "Unhealthy products", "type": "secondary"}
    ]);
  });

  it('Check checkbox from main group(onn => ff)', () => {
    const markersList = [
      {"count": 0, "id": "all", "isChecked": true, "name": "Show all", "type": "all"},
      {"count": 0, "id": "pending", "isChecked": true, "name": "Pending", "type": "main"},
      {"count": 0, "id": "approved", "isChecked": true, "name": "Approved", "type": "main"},
      {"count": 0, "id": "rejected", "isChecked": true, "name": "Rejected", "type": "main"},
      {"count": 0, "id": "rightsRequested", "isChecked": true, "name": "Rights requested", "type": "main"},
      {"count": 0, "id": "sticly", "isChecked": true, "name": "Sticly", "type": "main"},
      {"count": 0, "id": "topPhotos", "isChecked": false, "name": "Top photos", "type": "secondary"},
      {"count": 0, "id": "unhealthy", "isChecked": false, "name": "Unhealthy products", "type": "secondary"}
    ];
    const result = updateMarkerList({markersList, id: 'sticly'});
    expect(result).toEqual([
      {"count": 0, "id": "all", "isChecked": false, "name": "Show all", "type": "all"},
      {"count": 0, "id": "pending", "isChecked": true, "name": "Pending", "type": "main"},
      {"count": 0, "id": "approved", "isChecked": true, "name": "Approved", "type": "main"},
      {"count": 0, "id": "rejected", "isChecked": true, "name": "Rejected", "type": "main"},
      {"count": 0, "id": "rightsRequested", "isChecked": true, "name": "Rights requested", "type": "main"},
      {"count": 0, "id": "sticly", "isChecked": false, "name": "Sticly", "type": "main"},
      {"count": 0, "id": "topPhotos", "isChecked": false, "name": "Top photos", "type": "secondary"},
      {"count": 0, "id": "unhealthy", "isChecked": false, "name": "Unhealthy products", "type": "secondary"}
    ]);
  });
});
