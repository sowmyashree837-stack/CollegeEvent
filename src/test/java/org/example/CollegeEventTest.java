
package org.example;

import org.testng.annotations.Test;
import static org.testng.Assert.*;

public class CollegeEventTest {

    @Test
    public void testProjectName() {

        String projectName = "College Event Management";

        assertEquals(projectName, "College Event Management");
    }

    @Test
    public void testEventTitle() {

        String eventTitle = "Technical Symposium";

        assertNotNull(eventTitle);
        assertEquals(eventTitle, "Technical Symposium");
    }

    @Test
    public void testEventDate() {

        String eventDate = "2026-12-05";

        assertNotNull(eventDate);
        assertFalse(eventDate.isEmpty());
    }

    @Test
    public void testEventCategory() {

        String category = "Workshop";

        assertTrue(
                category.equals("Technical") ||
                        category.equals("Workshop") ||
                        category.equals("Seminar") ||
                        category.equals("Cultural")
        );
    }

    @Test
    public void testEventVenue() {

        String venue = "Main Auditorium";

        assertNotNull(venue);
        assertFalse(venue.isEmpty());
    }

    @Test
    public void testEventTime() {

        String eventTime = "10:00 AM";

        assertNotNull(eventTime);
        assertFalse(eventTime.isEmpty());
    }

    @Test
    public void testEventDescription() {

        String description =
                "A technical event featuring coding competitions.";

        assertNotNull(description);
        assertTrue(description.length() > 10);
    }
}
