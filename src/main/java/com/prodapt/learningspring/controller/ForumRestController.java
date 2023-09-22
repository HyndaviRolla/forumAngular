package com.prodapt.learningspring.controller;
 

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.prodapt.learningspring.entity.Post;
import com.prodapt.learningspring.repository.PostRepository;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin
public class ForumRestController {
	 @Autowired
    private PostRepository postRepository;

	    @GetMapping("/{id}")
	    public ResponseEntity<?> getPostDetail(@PathVariable int id) {
	        try {
	            Optional<Post> postOptional = postRepository.findById(id);

	            if (postOptional.isPresent()) {
	                Post post = postOptional.get();
	                Map<String, Object> response = new HashMap<>();
	                response.put("id", post.getId());
	                response.put("content", post.getContent());
	                return ResponseEntity.ok(response);
	            } else {
	                return ResponseEntity.notFound().build();
	            }
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred.");
	        }
	    } 
}