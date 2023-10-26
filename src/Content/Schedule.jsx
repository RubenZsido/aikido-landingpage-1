function Schedule() {
  return (
    <section className="section" id="schedule">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading dark-bg">
              <h2>
                Edzések <em>Időpontjai</em>
              </h2>
              <img src="assets/images/line-dec.png" alt="" />
              <p>
                Tekintsd meg az edzéseink időpontjait, hogy könnyedén megtaláld
                a hozzád legjobban passzolót!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="schedule-table filtering">
              <table>
                <tbody>
                  <tr>
                    <td className="day-time">Hétfő</td>
                    <td className="monday ts-item show" data-tsmeta="monday">
                      10:00AM - 11:30AM
                    </td>
                    <td className="tuesday ts-item" data-tsmeta="tuesday">
                      2:00PM - 3:30PM
                    </td>
                  </tr>
                  <tr>
                    <td className="day-time">Kedd</td>
                    <td className="friday ts-item" data-tsmeta="friday">
                      10:00AM - 11:30AM
                    </td>
                    <td
                      className="thursday friday ts-item"
                      data-tsmeta="thursday"
                    >
                      2:00PM - 3:30PM
                    </td>
                  </tr>
                  <tr>
                    <td className="day-time">Szerda</td>
                    <td className="tuesday ts-item" data-tsmeta="tuesday">
                      10:00AM - 11:30AM
                    </td>
                    <td className="monday ts-item show" data-tsmeta="monday">
                      2:00PM - 3:30PM
                    </td>
                  </tr>
                  <tr>
                    <td className="day-time">Csütörtök</td>
                    <td className="wednesday ts-item" data-tsmeta="wednesday">
                      10:00AM - 11:30AM
                    </td>
                    <td className="friday ts-item" data-tsmeta="friday">
                      2:00PM - 3:30PM
                    </td>
                  </tr>
                  <tr>
                    <td className="day-time">Péntek</td>
                    <td className="thursday ts-item" data-tsmeta="thursday">
                      10:00AM - 11:30AM
                    </td>
                    <td className="wednesday ts-item" data-tsmeta="wednesday">
                      2:00PM - 3:30PM
                    </td>
                  </tr>
                  <tr>
                    <td className="day-time">Szombat</td>
                    <td className="thursday ts-item" data-tsmeta="thursday">
                      10:00AM - 11:30AM
                    </td>
                    <td className="wednesday ts-item" data-tsmeta="wednesday">
                      2:00PM - 3:30PM
                    </td>
                  </tr>
                  <tr>
                    <td className="day-time">Vasárnap</td>
                    <td className="thursday ts-item" data-tsmeta="thursday">
                      10:00AM - 11:30AM
                    </td>
                    <td className="wednesday ts-item" data-tsmeta="wednesday">
                      2:00PM - 3:30PM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
